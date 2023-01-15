create table water_my_plants.moisture_measurement
(
    id             int auto_increment
        primary key,
    plant          varchar(100) null,
    moisture_level decimal      null,
    timestamp      datetime     null,
    plant_id       int          null
);

create table water_my_plants.plant
(
    id                   int auto_increment
        primary key,
    name                 varchar(100) not null,
    sensor_adc_channel   int          not null,
    sensor_gpio_channel  int          not null,
    pump_gpio_channel    int          not null,
    check_enabled        tinyint(1)   not null,
    check_state          varchar(50)  not null,
    watering_start_limit int          not null,
    watering_stop_limit  int          not null
);
