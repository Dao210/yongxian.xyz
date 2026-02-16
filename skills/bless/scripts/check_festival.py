#!/usr/bin/env python3
"""
检查当前日期是否是中国传统节日

用法:
    python check_festival.py                    # 检查今天
    python check_festival.py --date 2024-02-10  # 检查指定日期
    python check_festival.py --list             # 列出所有节日
"""

import argparse
import sys
from datetime import datetime, timedelta
import json

# 农历转换需要特殊库，这里使用简化版本
# 在实际使用中需要安装 lunarcalendar 或类似库
# pip install lunarcalendar

try:
    from lunarcalendar import Converter, Solar, Lunar
    HAS_LUNAR = True
except ImportError:
    HAS_LUNAR = False
    print("警告: 未安装 lunarcalendar 库，将使用预定义日期", file=sys.stderr)

# 节日数据库（农历和公历）
FESTIVALS = {
    # 农历节日（需要农历转换）
    "lunar": {
        "1-1": {
            "name": "春节",
            "english": "Spring Festival",
            "importance": "highest",
            "duration_days": 7
        },
        "1-15": {
            "name": "元宵节",
            "english": "Lantern Festival",
            "importance": "medium",
            "duration_days": 1
        },
        "5-5": {
            "name": "端午节",
            "english": "Dragon Boat Festival",
            "importance": "high",
            "duration_days": 1
        },
        "7-7": {
            "name": "七夕节",
            "english": "Qixi Festival",
            "importance": "medium",
            "duration_days": 1
        },
        "8-15": {
            "name": "中秋节",
            "english": "Mid-Autumn Festival",
            "importance": "high",
            "duration_days": 1
        },
        "9-9": {
            "name": "重阳节",
            "english": "Double Ninth Festival",
            "importance": "medium",
            "duration_days": 1
        },
        "12-8": {
            "name": "腊八节",
            "english": "Laba Festival",
            "importance": "low",
            "duration_days": 1
        },
        "12-23": {
            "name": "小年",
            "english": "Little New Year",
            "importance": "medium",
            "duration_days": 1
        },
    },
    # 公历节日
    "solar": {
        "4-4": {  # 清明是节气，日期在4月4-6日之间
            "name": "清明节",
            "english": "Qingming Festival",
            "importance": "high",
            "duration_days": 1,
            "floating": True  # 日期会浮动
        }
    }
}

# 预定义的近期节日日期（用于没有农历库的情况）
PREDEFINED_DATES = {
    "2024-02-10": "春节",
    "2024-02-24": "元宵节",
    "2024-04-04": "清明节",
    "2024-06-10": "端午节",
    "2024-08-10": "七夕节",
    "2024-09-17": "中秋节",
    "2024-10-11": "重阳节",
    "2024-12-28": "腊八节",
    "2025-01-28": "春节",
    "2025-02-12": "元宵节",
    "2025-04-04": "清明节",
    "2025-05-31": "端午节",
    "2025-08-29": "七夕节",
    "2025-10-06": "中秋节",
    "2025-10-29": "重阳节",
    "2025-12-27": "腊八节",
    "2026-02-17": "春节",
    "2026-03-03": "元宵节",
    "2026-04-05": "清明节",
    "2026-06-19": "端午节",
    "2026-08-25": "七夕节",
    "2026-09-25": "中秋节",
    "2026-10-19": "重阳节",
}


def solar_to_lunar(solar_date):
    """公历转农历"""
    if not HAS_LUNAR:
        return None

    solar = Solar(solar_date.year, solar_date.month, solar_date.day)
    lunar = Converter.solar2lunar(solar)

    return {
        "year": lunar.lunar_year,
        "month": lunar.lunar_month,
        "day": lunar.lunar_day,
        "is_leap": lunar.is_leap
    }


def check_festival(date_obj):
    """检查指定日期是否是节日"""
    date_str = date_obj.strftime("%Y-%m-%d")
    month_day = f"{date_obj.month}-{date_obj.day}"

    # 首先检查预定义日期
    if date_str in PREDEFINED_DATES:
        return {
            "date": date_str,
            "name": PREDEFINED_DATES[date_str],
            "source": "predefined"
        }

    # 检查公历节日
    if month_day in FESTIVALS["solar"]:
        festival = FESTIVALS["solar"][month_day]
        return {
            "date": date_str,
            "name": festival["name"],
            "english": festival["english"],
            "importance": festival["importance"],
            "source": "solar"
        }

    # 检查农历节日（如果有农历库）
    if HAS_LUNAR:
        lunar = solar_to_lunar(date_obj)
        if lunar:
            lunar_key = f"{lunar['month']}-{lunar['day']}"
            if lunar_key in FESTIVALS["lunar"] and not lunar["is_leap"]:
                festival = FESTIVALS["lunar"][lunar_key]
                return {
                    "date": date_str,
                    "name": festival["name"],
                    "english": festival["english"],
                    "importance": festival["importance"],
                    "lunar_date": f"{lunar['year']}-{lunar['month']}-{lunar['day']}",
                    "source": "lunar"
                }

    return None


def list_all_festivals(year=None):
    """列出所有节日"""
    if year:
        # 列出指定年份的所有节日
        date_obj = datetime(year, 1, 1)
        festivals = []

        while date_obj.year == year:
            result = check_festival(date_obj)
            if result:
                festivals.append(result)
            date_obj += timedelta(days=1)

        return festivals
    else:
        # 列出节日类型
        result = {"lunar": [], "solar": []}
        for key, festival in FESTIVALS["lunar"].items():
            festival["lunar_date"] = key
            result["lunar"].append(festival)
        for key, festival in FESTIVALS["solar"].items():
            festival["solar_date"] = key
            result["solar"].append(festival)
        return result


def main():
    parser = argparse.ArgumentParser(description="检查中国传统节日")
    parser.add_argument("--date", help="检查指定日期 (YYYY-MM-DD)")
    parser.add_argument("--list", action="store_true", help="列出所有节日")
    parser.add_argument("--year", type=int, help="列出指定年份的所有节日")
    parser.add_argument("--json", action="store_true", help="输出JSON格式")

    args = parser.parse_args()

    if args.list:
        if args.year:
            festivals = list_all_festivals(args.year)
        else:
            festivals = list_all_festivals()

        if args.json:
            print(json.dumps(festivals, ensure_ascii=False, indent=2))
        else:
            if args.year:
                print(f"\n{args.year}年节日:")
                for f in festivals:
                    print(f"  {f['date']}: {f['name']}")
            else:
                print("\n农历节日:")
                for f in festivals["lunar"]:
                    print(f"  农历{f['lunar_date']}: {f['name']} ({f['english']})")
                print("\n公历节日:")
                for f in festivals["solar"]:
                    print(f"  公历{f['solar_date']}: {f['name']} ({f['english']})")

    else:
        if args.date:
            date_obj = datetime.strptime(args.date, "%Y-%m-%d")
        else:
            date_obj = datetime.now()

        result = check_festival(date_obj)

        if args.json:
            print(json.dumps(result, ensure_ascii=False, indent=2))
        else:
            if result:
                print(f"\n🎊 {result['name']} 🎊")
                print(f"日期: {result['date']}")
                if "english" in result:
                    print(f"English: {result['english']}")
                if "importance" in result:
                    print(f"重要性: {result['importance']}")
                if "lunar_date" in result:
                    print(f"农历: {result['lunar_date']}")
            else:
                print(f"\n{date_obj.strftime('%Y-%m-%d')} 不是传统节日")

    return 0


if __name__ == "__main__":
    sys.exit(main())
