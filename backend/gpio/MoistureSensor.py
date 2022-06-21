import RPi.GPIO as GPIO
import time

from gpio.MCP3008 import MCP3008

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

adc = MCP3008()


class MoistureSensor:
    def __init__(self, gpio_channel, adc_channel):
        self.gpio_channel = gpio_channel
        self.adc_channel = adc_channel
        GPIO.setup(gpio_channel, GPIO.OUT)

    def cleanup(self):
        GPIO.output(self.gpio_channel, GPIO.LOW)

    def measure(self):
        GPIO.output(self.gpio_channel, 1)
        time.sleep(0.3)
        value = adc.read( channel = self.adc_channel )
        GPIO.output(self.gpio_channel, 0)
        return value
