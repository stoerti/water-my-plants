import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

class Pump:
    def __init__(self, gpio_channel):
        self.gpio_channel = gpio_channel
        GPIO.setup(gpio_channel, GPIO.OUT)
        GPIO.output(self.gpio_channel, 1)

    def cleanup(self):
        GPIO.output(self.gpio_channel, 1)

    def pump_water(self, seconds):
        GPIO.output(self.gpio_channel, 0)
        time.sleep(seconds)
        GPIO.output(self.gpio_channel, 1)
