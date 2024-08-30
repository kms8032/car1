from microbit import *
import cutebot

# 초기 설정
cutebot.set_speed(50)  # 로봇의 속도를 50%로 설정

# 무한 루프
while True:
    # 정면에 벽이 없는지 확인
    if cutebot.ultrasonic() > 10:  # 벽이 없을 경우
        cutebot.forward()  # 앞으로 이동
    else:
        # 정면에 벽이 있을 경우
        cutebot.turn_right()  # 오른쪽으로 회전

    sleep(100)  # 0.1초 대기
