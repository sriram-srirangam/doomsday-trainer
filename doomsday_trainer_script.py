from random import randint
import time

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def compute_day_of_week(month, day, year):
    step_1 = (year % 100) // 4
    step_2 = step_1 + day
    step_3 = step_2 + [4, 2, 0, 6][((year // 100) - 17)]
    step_4 = step_3 + [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6][month - 1]
    step_5 = step_4 - int(is_leap_year(year) and month in [1, 2])
    step_6 = step_5 + (year % 100)
    step_7 = step_6 % 7
    return ["Satur", "Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri"][step_7] + "day"

def get_rand_date():
    year = randint(1700, 2099)
    month = randint(1, 12)
    if month == 2:
            if is_leap_year(year):
                    day = randint(1, 29)
            else:
                    day = randint(1, 28)
    elif month in [9, 4, 6, 11]:
            day = randint(1, 30)
    else:
            day = randint(1, 31)

    return month, day, year

while True:
    date = get_rand_date()
    start = time.time()
    input(f"Date: {date[0]}/{date[1]}/{date[2]}")
    end = time.time()
    print(f"{end - start} s")
    input(f"Answer is: {compute_day_of_week(*date)}\n")
