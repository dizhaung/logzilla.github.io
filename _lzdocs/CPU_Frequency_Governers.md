---
cid: 06
chapter: Performance Tuning
did: 02
title: CPU Frequency Governers
---


Recent Intel CPUs provide both energy saving and performance boost capabilities, respectively named `SpeedStep` and `TurboBoost`. 
These features change individual core frequency depending on system load.
However, this may not have the desired outcome in high performance servers.

### Checking the current processor speed
To check the current speed of your processor(s), type:

   cat /proc/cpuinfo  | grep MHz

For example:

    cat /proc/cpuinfo  | grep MHz
    cpu MHz   : 1400.000
    cpu MHz   : 1400.000
    cpu MHz   : 1400.000
    cpu MHz   : 1400.000
    cpu MHz   : 1400.000
    cpu MHz   : 1400.000
    cpu MHz   : 3500.000
    cpu MHz   : 3500.000

Note above that only 2 cores are running at top speed.
While this may be a good use for power efficiency, it is not always advantageous to have your high performance server running at half its capabilities.

### Running at Top Performance
The Linux kernel provides 4 profiles, named CPU governors named `conservative`, `ondemand`,  `userspace`, and `powersave` performance 

By default, Linux distributions set the `ondemand` governor. This governor is a good compromise between energy saving and performance boosting as it adapts to the current CPU work load. Although, there are cases in which performance is heavily degraded on moderately loaded servers. In such cases, we recommend using the `performance` governor instead.

### Disabling SpeedStep/TurboBoost

Run these commands (as root) to permanently set the performance governor:

    apt-get install cpufrequtils
    echo 'GOVERNOR="performance"' >/etc/default/cpufrequtils 
    service cpufrequtils reload

The governor may be changed at any time by altering the `GOVERNOR` variable above and reloading cpufrequtils.

>TurboBoost only runs when other cpu cores are throttled (down), due to each CPU's Thermal Design Power (TDP). This implies that enabling performance governor will have each core running exactly at nominal frequency, and never above.
>TurboBoost depends on SpeedStep, thus disabling SpeedStep in BIOS will disable CPU throttling and TurboBoost

