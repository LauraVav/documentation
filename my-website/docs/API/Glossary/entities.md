---
sidebar_position: 6
---

# Entities

## Entity types

Below you will find a comprehensive list of the **Entity Types**. Feel free you use the right hand navigation menu to quickly jump to the enity you'd like to view 🤓

## Acceleration

| KEY        	| TYPE   	| DESCRIPTION                                  	|
|------------	|--------	|----------------------------------------------	|
| ft/s²      	| float  	| acceleration expressed in feet by second     	|
| km/h²      	| float  	| acceleration expressed in kilometers by hour 	|
| m/s²       	| float  	| acceleration expressed in feet by second     	|
| scalar     	| float  	| source value                                 	|
| unit       	| string 	| source unit of distance                      	|
| unit-2     	| string 	| source unit of time                          	|
| confidence 	| float  	| confidence in value matching                 	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "ft/s²": 3.0378147176047437e-09,
    "km/h²": 1.2e-05,
    "m/s²": 9.25925925925926e-10,
    "scalar": 12.0,
    "unit": "mm",
    "unit_2": "h",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "ft/s²": 3.0378147176047437e-09,
    "km/h²": 1.2e-05,
    "m/s²": 9.25925925925926e-10,
    "scalar": 12.0,
    "unit": "mm",
    "unit_2": "h",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Bandwidth

| KEY        	| TYPE   	| DESCRIPTION                              	|
|------------	|--------	|------------------------------------------	|
| kbps       	| float  	| bandwidth expressed in kilobit by second 	|
| Mbps       	| float  	| bandwidth expressed in megabit by second 	|
| Gbps       	| float  	| bandwidth expressed in gigabit by second 	|
| scalar     	| float  	| source value                             	|
| unit       	| string 	| source unit of bandwidth                 	|
| confidence 	| float  	| confidence in value matching             	|


<Tabs>
<TabItem value="py" label="Python">

```py
{
    "kbps": 3000.0,
    "Mbps": 3.0,
    "Gbps": 0.003,
    "scalar": 3000.0,
    "unit": "kbps",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "kbps": 3000.0,
    "Mbps": 3.0,
    "Gbps": 0.003,
    "scalar": 3000.0,
    "unit": "kbps",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>


## Data Storage

| KEY        	| TYPE   	| DESCRIPTION                         	|
|------------	|--------	|-------------------------------------	|
| kbit       	| float  	| data storage expressed in kilobit   	|
| Gbit       	| float  	| data storage expressed in megabit   	|
| Mo         	| float  	| data storage expressed in megaoctet 	|
| Go         	| float  	| data storage expressed in gigaoctet 	|
| To         	| float  	| data storage expressed in teraoctet 	|
| scalar     	| float  	| source value                        	|
| unit       	| string 	| source unit of data storage         	|
| confidence 	| float  	| confidence in value matching        	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "kbit": 7000.0,
    "Gbit": 0.007,
    "Mo": 0.875,
    "Go": 0.000875,
    "To": 8.75e-07,
    "scalar": 7.0,
    "unit": "Mbit",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "kbit": 7000.0,
    "Gbit": 0.007,
    "Mo": 0.875,
    "Go": 0.000875,
    "To": 8.75e-07,
    "scalar": 7.0,
    "unit": "Mbit",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Date

| KEY            	| TYPE   	| DESCRIPTION                                                                                	| CONSTRAINTS                                                                       	|
|----------------	|--------	|--------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------	|
| ISO            	| string 	| ISO 8601 format                                                                            	| aaaa-mm-dd                                                                        	|
| formatted      	| string 	| the date written in english                                                                	| [weekday name] [Day of the month as a decimal number [01,31]] [month name] [year] 	|
| chronology     	| string 	| indicates the chronological relationship between the timestamp of the message and the date 	| ['future', 'past', 'present']                                                     	|
| chronology_day 	| int    	| number of days between the date and the timestamp of the message                           	|                                                                                   	|
| confidence     	| float  	| confidence for this entity                                                                 	|                                                                                   	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "ISO": "2017-11-12",
    "formatted": "Sunday 12 November 2017",
    "chronology": "past",
    "chronology_day": 39,
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "ISO": "2017-11-12",
    "formatted": "Sunday 12 November 2017",
    "chronology": "past",
    "chronology_day": 39,
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Debit

| KEY           	| TYPE   	| DESCRIPTION                              	|
|---------------	|--------	|------------------------------------------	|
| cubic_meter/s 	| float  	| debit expressed in cubic meter by second 	|
| cubic_meter/h 	| float  	| debit expressed in cubic meter by hour   	|
| mL/s          	| float  	| debit expressed in milliliter by second  	|
| L/h           	| float  	| debit expressed in liter by hour         	|
| L/s           	| float  	| debit expressed in liter by second       	|
| scalar        	| float  	| source value                             	|
| unit          	| string 	| source unit                              	|
| confidence    	| float  	| confidence in value matching             	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "cubic_meter/s": 0.043,
    "cubic_meter/h": 154.79999999999998,
    "mL/s": 43000.0,
    "L/h": 154800.0,
    "L/s": 43.0
    "scalar": 43.0,
    "unit": "l",
    "unit_2": "s",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "cubic_meter/s": 0.043,
    "cubic_meter/h": 154.79999999999998,
    "mL/s": 43000.0,
    "L/h": 154800.0,
    "L/s": 43.0
    "scalar": 43.0,
    "unit": "l",
    "unit_2": "s",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Distance

| KEY        	| TYPE   	| DESCRIPTION                            	|
|------------	|--------	|----------------------------------------	|
| centimeter 	| float  	| distance expressed in centimeters (cm) 	|
| feet       	| float  	| distance expressed in feet (ft)        	|
| inches     	| float  	| distance expressed in inches (in)      	|
| kilometer  	| float  	| distance expressed in kilometers (km)  	|
| meter      	| float  	| distance expressed in meters (m)       	|
| miles      	| float  	| distance expressed in miles (ml)       	|
| yard       	| float  	| distance expressed in yards (yd)       	|
| scalar     	| float  	| source value                           	|
| unit       	| string 	| source unit                            	|
| confidence 	| float  	| confidence in value matching           	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "kilometer": 0.0555,
    "inches": 2185.0393700787404,
    "feet": 182.08661417322833,
    "centimeter": 5550.0,
    "meter": 55.5,
    "miles": 0.034486090500000004,
    "yard": 60.694799999999994,
    "scalar": 55.5,
    "unit": "m",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "kilometer": 0.0555,
    "inches": 2185.0393700787404,
    "feet": 182.08661417322833,
    "centimeter": 5550.0,
    "meter": 55.5,
    "miles": 0.034486090500000004,
    "yard": 60.694799999999994,
    "scalar": 55.5,
    "unit": "m",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Duration

| KEY         	| TYPE                      	| DESCRIPTION                                            	|
|-------------	|---------------------------	|--------------------------------------------------------	|
| days        	| float                     	| duration expressed in days                             	|
| hours       	| float                     	| duration expressed in hours (h)                        	|
| minutes     	| float                     	| duration expressed in minutes (min)                    	|
| months      	| float                     	| duration expressed in months                           	|
| preposition 	| source preposition object 	| describes the preposition that constructs the duration 	|
| seconds     	| float                     	| duration expressed in seconds (s)                      	|
| weeks       	| float                     	| duration expressed in weeks                            	|
| years       	| float                     	| duration expressed in years                            	|
| confidence  	| float                     	| confidence in value matching                           	|


<Tabs>
<TabItem value="py" label="Python">

```py
"source":"pendant 3h",
"value":{
    "confidence": 0.99,
    "days": 0.125,
    "hours": 3,
    "minutes": 180,
    "months": 0.004166666666666667,
    "preposition": {
        "category": [
            "Localisation",
            "Duration",
            "Temporal Localisation"
        ],
        "source": "pendant"
    },
    "seconds": 10800,
    "weeks": 0.017857142857142856,
    "years": 0.00034223134839151266
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
"source":"pendant 3h",
"value":{
    "confidence": 0.99,
    "days": 0.125,
    "hours": 3,
    "minutes": 180,
    "months": 0.004166666666666667,
    "preposition": {
        "category": [
            "Localisation",
            "Duration",
            "Temporal Localisation"
        ],
        "source": "pendant"
    },
    "seconds": 10800,
    "weeks": 0.017857142857142856,
    "years": 0.00034223134839151266
}
```

</TabItem>
</Tabs>

### Source Preposition Object

| KEY      	| TYPE           	| DESCRIPTION                       	|
|----------	|----------------	|-----------------------------------	|
| category 	| list of string 	| see preposition categories        	|
| source   	| string         	| source string for the preposition 	|

## Electric Charge

| KEY               	| TYPE   	| DESCRIPTION                                    	|
|-------------------	|--------	|------------------------------------------------	|
| scalar            	| float  	| source value                                   	|
| unit              	| string 	| source unit                                    	|
| confidence        	| float  	| confidence in value matching                   	|
| Ampere-hour       	| float  	| electric charge expressed in ampere by hour    	|
| coulomb           	| float  	| electric charge expressed in Coulomb           	|
| Faraday           	| float  	| electric charge expressed in Faraday           	|
| elementary_charge 	| float  	| electric charge expressed in elementary charge 	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "Ampere-hour": 1.94444444444446e-06,
    "coulomb": 0.007,
    "Faraday": 7.254988174633501e-08,
    "elementary_charge": 4.369056752984294e+16,
    "scalar": 7.0,
    "unit": "mC",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "Ampere-hour": 1.94444444444446e-06,
    "coulomb": 0.007,
    "Faraday": 7.254988174633501e-08,
    "elementary_charge": 4.369056752984294e+16,
    "scalar": 7.0,
    "unit": "mC",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Electric Power

| KEY         	| TYPE   	| DESCRIPTION                                   	|
|-------------	|--------	|-----------------------------------------------	|
| scalar      	| float  	| source value                                  	|
| unit        	| string 	| source unit                                   	|
| confidence  	| float  	| confidence in value matching                  	|
| ampere      	| float  	| electric power expressed in amperes (A)       	|
| kiloampere  	| float  	| electric power expressed in kiloamperes (kA)  	|
| centiampere 	| float  	| electric power expressed in centiamperes (cA) 	|


<Tabs>
<TabItem value="py" label="Python">

```py
{
    "ampere": 0.055,
    "centiampere": 5.5,
    "kiloampere": 5.5e-05,
    "scalar": 55.0,
    "unit": "mA",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "ampere": 0.055,
    "centiampere": 5.5,
    "kiloampere": 5.5e-05,
    "scalar": 55.0,
    "unit": "mA",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Energy

| KEY        	| TYPE   	| DESCRIPTION                            	|
|------------	|--------	|----------------------------------------	|
| joule      	| float  	| energy expressed in joule              	|
| MWh        	| float  	| energy expressed in megawatt by hour   	|
| kWh        	| float  	| energy expressed in kilowatt by hour   	|
| kcal       	| float  	| energy expressed in kilocalory by hour 	|
| toe        	| float  	| energy expressed in tonne of oil       	|
| erg        	| float  	| energy expressed in erg                	|
| keV        	| float  	| energy expressed in kiloelectronvolt   	|
| thm        	| float  	| energy expressed in thm                	|
| scalar     	| float  	| source value                           	|
| unit       	| string 	| source unit                            	|
| confidence 	| float  	| confidence in value matching           	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "joule": 1231200.0,
    "MWh": 0.000342,
    "kWh": 0.342,
    "kcal": 294.067067927773,
    "toe": 2.94067067927773e-05,
    "erg": 12312000000000.0,
    "keV": 7.684546677534658e+21,
    "thm": 0.011660526390559443,
    "scalar": 342.0,
    "unit": "Wh",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "joule": 1231200.0,
    "MWh": 0.000342,
    "kWh": 0.342,
    "kcal": 294.067067927773,
    "toe": 2.94067067927773e-05,
    "erg": 12312000000000.0,
    "keV": 7.684546677534658e+21,
    "thm": 0.011660526390559443,
    "scalar": 342.0,
    "unit": "Wh",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Frequency

| KEY        	| TYPE   	| DESCRIPTION                              	|
|------------	|--------	|------------------------------------------	|
| scalar     	| float  	| source value                             	|
| unit       	| string 	| source unit                              	|
| confidence 	| float  	| confidence in value matching             	|
| hertz      	| float  	| frequency expressed in amperes (A)       	|
| kilohertz  	| float  	| frequency expressed in kiloamperes (kA)  	|
| megahertz  	| float  	| frequency expressed in centiamperes (cA) 	|
| gigahertz  	| float  	| frequency expressed in centiamperes (cA) 	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
  "confidence": 0.99,
  "gigahertz": 1.3e-8,
  "hertz": 13,
  "kilohertz": 0.013,
  "megahertz": 0.00013,
  "scalar": 13,
  "unit": "Hz"
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
  "confidence": 0.99,
  "gigahertz": 1.3e-8,
  "hertz": 13,
  "kilohertz": 0.013,
  "megahertz": 0.00013,
  "scalar": 13,
  "unit": "Hz"
}
```

</TabItem>
</Tabs>

## Fuel consumption

| KEY        	| TYPE   	| DESCRIPTION                                           	|
|------------	|--------	|-------------------------------------------------------	|
| mpg        	| float  	| fuel consumption expressed in miles per gallon        	|
| km/l       	| float  	| fuel consumption expressed in kilometer by liter      	|
| l/100km    	| float  	| fuel consumption expressed in liter by 100 kilometers 	|
| l/km       	| float  	| fuel consumption expressed in liter by kilometer      	|
| km/gal     	| float  	| fuel consumption expressed in kilometer by gallon     	|
| scalar     	| float  	| source value                                          	|
| unit       	| string 	| source unit                                           	|
| confidence 	| float  	| confidence in value matching                          	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
  "mpg": 9.0,
  "km/l": 3.82629336741469,
  "l/100km": 26.134953699999997,
  "km/gal": 14.484089175945241,
  "l/km": 0.26134953699999997,
  "confidence": 0.99,
  "scalar": 9,
  "unit": "mpg"
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
c{
  "mpg": 9.0,
  "km/l": 3.82629336741469,
  "l/100km": 26.134953699999997,
  "km/gal": 14.484089175945241,
  "l/km": 0.26134953699999997,
  "confidence": 0.99,
  "scalar": 9,
  "unit": "mpg"
}
```

</TabItem>
</Tabs>

## Hex Color

If we know about a color matching the hex color code :

| KEY        	| TYPE        	| DESCRIPTION                         	|
|------------	|-------------	|-------------------------------------	|
| color_name 	| string      	| see                                 	|
| hex        	| string      	| hexadecimal representation of color 	|
| rgb        	| RGB Object] 	| the rgb code of the color           	|
| hsl        	| HSL Object] 	| the hsl code of the color           	|
| hsv        	| HSV Object  	| the hsv code of the color           	|
| cmyk       	| CMJK Object 	| the cmyk code of the color          	|
| confidence 	| float       	| confidence in value matching        	|

If no matching color in database :

| KEY        	| TYPE   	| DESCRIPTION                         	|
|------------	|--------	|-------------------------------------	|
| hex        	| string 	| hexadecimal representation of color 	|
| confidence 	| float  	| confidence in value matching        	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "hex": "#FFFFFF",
    "color_name": "white",
    "rgb": {
        "blue": 255,
        "red": 255,
        "green": 255
    },
    "hsv": {
        "hue": 0,
        "value": 100,
        "saturation": 0
    },
    "hsl": {
        "hue": 0,
        "lightness": 100,
        "saturation": 0
    },
    "cmyk": {
        "yellow": 0,
        "magenta": 0,
        "cyan": 0,
        "black": 0
    }
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "hex": "#FFFFFF",
    "color_name": "white",
    "rgb": {
        "blue": 255,
        "red": 255,
        "green": 255
    },
    "hsv": {
        "hue": 0,
        "value": 100,
        "saturation": 0
    },
    "hsl": {
        "hue": 0,
        "lightness": 100,
        "saturation": 0
    },
    "cmyk": {
        "yellow": 0,
        "magenta": 0,
        "cyan": 0,
        "black": 0
    }
}
```

</TabItem>
</Tabs>

### RGB Object

[RGB color model](https://en.wikipedia.org/wiki/RGB_color_model)

| KEY   	| TYPE 	|
|-------	|------	|
| red   	| int  	|
| green 	| int  	|
| blue  	| int  	|



### HSL Object

[HSL color codes](https://en.wikipedia.org/wiki/HSL_and_HSV)

| KEY        	| TYPE 	|
|------------	|------	|
| hue        	| int  	|
| saturation 	| int  	|
| lightness  	| int  	|

HSV Object

[HSV color codes](https://en.wikipedia.org/wiki/HSL_and_HSV)

| KEY        	| TYPE 	|
|------------	|------	|
| hue        	| int  	|
| saturation 	| int  	|
| value      	| int  	|

CMYK Object

[CMYK color model](https://en.wikipedia.org/wiki/CMYK_color_model)

| KEY     	| TYPE 	|
|---------	|------	|
| cyan    	| int  	|
| majenta 	| int  	|
| yellow  	| int  	|
| black   	| int  	|

## Interval

| KEY        	| TYPE                     	| DESCRIPTION                               	| CONSTRAINTS                                     	|
|------------	|--------------------------	|-------------------------------------------	|-------------------------------------------------	|
| confidence 	| float                    	| confidence in value matching              	|                                                 	|
| duration   	| Interval Duration Object 	| time between start, end, and present time 	|                                                 	|
| end        	| Date Entity              	| end point of the interval                 	| None if interval is open-ended                  	|
| start      	| Date Entity              	| start point of the interval               	| None if interval doesn't have a specified start 	|


<Tabs>
<TabItem value="py" label="Python">

```py
"source": "demain de 13h a 17h",
"value": {
    "confidence": 0.99,
    "duration": {
        "now_end": {
            "days": 1.226400462962963,
            "hours": 29.433611111111112,
            "minutes": 1766.0166666666667,
            "months": 0.040880015432098765,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": 105961,
            "weeks": 0.17520006613756614,
            "years": 0.0033577014728623216
        },
        "start_end": {
            "days": 0.16666666666666666,
            "hours": 4,
            "minutes": 240,
            "months": 0.005555555555555556,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": 14400,
            "weeks": 0.023809523809523808,
            "years": 0.0004563084645220169
        },
        "start_now": {
            "days": -1.0597337962962963,
            "hours": -25.433611111111112,
            "minutes": -1526.0166666666667,
            "months": -0.03532445987654321,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": -91561,
            "weeks": -0.15139054232804233,
            "years": -0.0029013930083403045
        }
    },
    "end": {
        "ISO": "2019-03-26 17:00:00",
        "chronology": "future",
        "chronology_day": 2,
        "confidence": 0.99,
        "formatted": "Tuesday 26 March 2019 17:00:00",
        "timestamp": 1553616000
    },
    "start": {
        "ISO": "2019-03-26 13:00:00",
        "chronology": "future",
        "chronology_day": 2,
        "confidence": 0.99,
        "formatted": "Tuesday 26 March 2019 13:00:00",
        "timestamp": 1553601600
    }
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
"source": "demain de 13h a 17h",
"value": {
    "confidence": 0.99,
    "duration": {
        "now_end": {
            "days": 1.226400462962963,
            "hours": 29.433611111111112,
            "minutes": 1766.0166666666667,
            "months": 0.040880015432098765,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": 105961,
            "weeks": 0.17520006613756614,
            "years": 0.0033577014728623216
        },
        "start_end": {
            "days": 0.16666666666666666,
            "hours": 4,
            "minutes": 240,
            "months": 0.005555555555555556,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": 14400,
            "weeks": 0.023809523809523808,
            "years": 0.0004563084645220169
        },
        "start_now": {
            "days": -1.0597337962962963,
            "hours": -25.433611111111112,
            "minutes": -1526.0166666666667,
            "months": -0.03532445987654321,
            "preposition": {
                "category": [],
                "source": null
            },
            "seconds": -91561,
            "weeks": -0.15139054232804233,
            "years": -0.0029013930083403045
        }
    },
    "end": {
        "ISO": "2019-03-26 17:00:00",
        "chronology": "future",
        "chronology_day": 2,
        "confidence": 0.99,
        "formatted": "Tuesday 26 March 2019 17:00:00",
        "timestamp": 1553616000
    },
    "start": {
        "ISO": "2019-03-26 13:00:00",
        "chronology": "future",
        "chronology_day": 2,
        "confidence": 0.99,
        "formatted": "Tuesday 26 March 2019 13:00:00",
        "timestamp": 1553601600
    }
}
```

</TabItem>
</Tabs>

### Interval Duration Object

| KEY       	| TYPE            	| DESCRIPTION                                                            	|
|-----------	|-----------------	|------------------------------------------------------------------------	|
| start_end 	| Duration Entity 	| duration between the start of the interval and its end                 	|
| start_now 	| Duration Entity 	| duration between the start of the interval and the time of the message 	|
| now_end   	| Duration Entity 	| duration between the time of the message and the end of the interval   	|

## IP

| KEY        	| TYPE   	| DESCRIPTION                  	|
|------------	|--------	|------------------------------	|
| lat        	| float  	| latitude of location IP      	|
| lng        	| float  	| longitude of location IP     	|
| city       	| string 	| city of location IP          	|
| country    	| string 	| country ISO of location IP   	|
| postal     	| string 	| zipcode of location IP       	|
| region     	| string 	| region of location IP        	|
| hostname   	| string 	| name of host of location IP  	|
| org        	| string 	| organisation of host         	|
| ip         	| string 	| IP formatted                 	|
| confidence 	| float  	| confidence in value matching 	|

<Tabs>
<TabItem value="py" label="Python">

```py
[
    {
        "entity": {
            "city": "Paris",
            "hostname": "pas75-1-81-57-53-204.fbx.proxad.net",
            "lat": "48.8628",
            "lng": "2.3292",
            "country0": "FR",
            "postal": "75001",
            "region": "\u00cele-de-France",
            "ip": "81.57.53.204",
            "org": "AS12322 Free SAS",
            "confidence": 0.99
        },
        "source": "81.57.53.204",
        "tag": "ip"
    }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
    {
        "entity": {
            "city": "Paris",
            "hostname": "pas75-1-81-57-53-204.fbx.proxad.net",
            "lat": "48.8628",
            "lng": "2.3292",
            "country0": "FR",
            "postal": "75001",
            "region": "\u00cele-de-France",
            "ip": "81.57.53.204",
            "org": "AS12322 Free SAS",
            "confidence": 0.99
        },
        "source": "81.57.53.204",
        "tag": "ip"
    }
]
```

</TabItem>
</Tabs>

## IPv6

| KEY        	| TYPE   	| DESCRIPTION                  	|
|------------	|--------	|------------------------------	|
| lat        	| float  	| latitude of location IPV6    	|
| lng        	| float  	| longitude of location IPV6   	|
| city       	| string 	| city of location IPv6        	|
| country    	| string 	| country ISO of location IPv6 	|
| postal     	| string 	| zipcode of location IPv6     	|
| region     	| string 	| region of location IPv6      	|
| org        	| string 	| organisation of host         	|
| ip         	| string 	| IPv6 formatted               	|
| confidence 	| float  	| confidence in value matching 	|

<Tabs>

<TabItem value="py" label="Python">

```py
{
    "city": "Macon",
    "lat": "32.8407",
    "lng": "-83.6324",
    "country": "US",
    "postal": "31205",
    "region": "Georgia",
    "ip": "2604:180:2::d2a1:3da5",
    "org": "AS3842 RamNode LLC",
    "confidence": 0.99
}


{
    "candela": 7.0,
    "centicandela": 700.0,
    "kilocandela": 0.007,
    "scalar": 7.0,
    "unit": "cd",
    "confidence": 0.99
}


{
    "local": "hello",
    "domain": "lettria.com",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "city": "Macon",
    "lat": "32.8407",
    "lng": "-83.6324",
    "country": "US",
    "postal": "31205",
    "region": "Georgia",
    "ip": "2604:180:2::d2a1:3da5",
    "org": "AS3842 RamNode LLC",
    "confidence": 0.99
}


{
    "candela": 7.0,
    "centicandela": 700.0,
    "kilocandela": 0.007,
    "scalar": 7.0,
    "unit": "cd",
    "confidence": 0.99
}


{
    "local": "hello",
    "domain": "lettria.com",
    "confidence": 0.99
}


```

</TabItem>
</Tabs>


## Light Intensity

| KEY          	| TYPE   	| DESCRIPTION                                      	|
|--------------	|--------	|--------------------------------------------------	|
| candela      	| float  	| light intensity expressed in candelas (cd)       	|
| kilocandela  	| float  	| light intensity expressed in kilocandelas (kcd)  	|
| centicandela 	| float  	| light intensity expressed in centicandelas (ccd) 	|
| scalar       	| float  	| soure value                                      	|
| unit         	| string 	| source unit                                      	|
| confidence   	| float  	| confidence in value matching                     	|

## Mail

| KEY        	| TYPE   	| DESCRIPTION                  	|
|------------	|--------	|------------------------------	|
| local      	| string 	| the local part of the email  	|
| domain     	| string 	| the domain of the email      	|
| confidence 	| float  	| confidence in value matching 	|

## Mass

| KEY         	| TYPE   	| DESCRIPTION                   	|
|-------------	|--------	|-------------------------------	|
| gramme      	| float  	| mass expressed in grams (g)   	|
| kilogramme  	| float  	| mass expressed in grams (kg)  	|
| centigramme 	| float  	| mass expressed grams in (cg)  	|
| tonnes      	| float  	| mass expressed in grams (t)   	|
| pounds      	| float  	| mass expressed in grams (lb)  	|
| stone       	| float  	| mass expressed in grams (st)  	|
| ton         	| float  	| mass expressed in grams (ton) 	|
| onces       	| float  	| mass expressed in grams (oz)  	|
| scalar      	| float  	| source value                  	|
| unit        	| string 	| source unit                   	|
| confidence  	| float  	| confidence in value matching  	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "gramme": 4.0,
    "centigramme": 400.0,
    "kilogramme": 0.004,
    "pounds": 0.00881849768073511,
    "tonnes": 4e-06,
    "stone": 0.0006298924930987404,
    "ton": 3.936814133162738e-07,
    "onces": 0.14109596289176177,
    "scalar": 7.0,
    "unit": "g",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "gramme": 4.0,
    "centigramme": 400.0,
    "kilogramme": 0.004,
    "pounds": 0.00881849768073511,
    "tonnes": 4e-06,
    "stone": 0.0006298924930987404,
    "ton": 3.936814133162738e-07,
    "onces": 0.14109596289176177,
    "scalar": 7.0,
    "unit": "g",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Mass by Volume

| KEY           	| TYPE   	| DESCRIPTION                                              	|
|---------------	|--------	|----------------------------------------------------------	|
| gramme/L      	| float  	| density expressed in grams by liters (g/L)               	|
| kilogramme/L  	| float  	| density expressed in kilograms by liters (kg/L)          	|
| centigramme/L 	| float  	| density expressed in centgrams by liters (cg/L)          	|
| tonnes/dm3    	| float  	| density expressed in tonnes by cubic decimeters (t/dm3)  	|
| pounds/dm3    	| float  	| density expressed in pounds by cubic decimeters (lb/dm3) 	|
| stone/dm3     	| float  	| density expressed in grams (st/dm3)                      	|
| ton/dm3       	| float  	| density expressed in grams (ton/dm3)                     	|
| onces/dm3     	| float  	| density expressed in grams (oz/dm3)                      	|
| scalar        	| float  	| source value                                             	|
| unit          	| string 	| source unit for mass                                     	|
| unit-1        	| string 	| source unit for volume                                   	|
| confidence    	| float  	| confidence in value matching                             	|


<Tabs>
<TabItem value="py" label="Python">

```py
{
    "gramme/L": 33.0,
    "centigramme/L": 3300.0,
    "kilogramme/L": 0.033,
    "ton/dm3": 3.247871659859259e-06,
    "tonnes/dm3": 3.3e-05,
    "pounds/dm3": 0.07275260586606466,
    "onces/dm3": 1.1640416938570346,
    "stone/dm3": 0.005196613068064608,
    "scalar": 7.0,
    "unit": "g",
    "unit-1": "l",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "gramme/L": 33.0,
    "centigramme/L": 3300.0,
    "kilogramme/L": 0.033,
    "ton/dm3": 3.247871659859259e-06,
    "tonnes/dm3": 3.3e-05,
    "pounds/dm3": 0.07275260586606466,
    "onces/dm3": 1.1640416938570346,
    "stone/dm3": 0.005196613068064608,
    "scalar": 7.0,
    "unit": "g",
    "unit-1": "l",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Molar concentration

| KEY        	| TYPE   	| DESCRIPTION                                                 	|
|------------	|--------	|-------------------------------------------------------------	|
| mol/L      	| float  	| concentration of substance expressed in moles by liter      	|
| kmol/L     	| float  	| concentration of substance expressed in kilomoles by liter  	|
| cmol/L     	| float  	| concentration of substance expressed in centimoles by liter 	|
| mmol/L     	| float  	| concentration of substance expressed in millimoles by liter 	|
| μmol/L     	| float  	| concentration of substance expressed in micromoles by liter 	|
| scalar     	| float  	| source value                                                	|
| unit       	| string 	| source mole unit                                            	|
| unit_2     	| string 	| source volume unit                                          	|
| confidence 	| float  	| confidence in value matching                                	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "mol/L": 1000.0,
    "kmol/L": 1.0,
    "cmol/L": 100000.0,
    "mmol/L": 1000000.0,
    "μmol/L": 1000000000.0,
    "scalar": 1.0,
    "unit": "kmol",
    "unit_2": "l",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "mol/L": 1000.0,
    "kmol/L": 1.0,
    "cmol/L": 100000.0,
    "mmol/L": 1000000.0,
    "μmol/L": 1000000000.0,
    "scalar": 1.0,
    "unit": "kmol",
    "unit_2": "l",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Mol

| KEY        	| TYPE   	| DESCRIPTION                                        	|
|------------	|--------	|----------------------------------------------------	|
| mol        	| float  	| amount of substance expressed in moles (mol)       	|
| kilomol    	| float  	| amount of substance expressed in kilomoles (kmol)  	|
| centimol   	| float  	| amount of substance expressed in centimoles (cmol) 	|
| scalar     	| float  	| source value                                       	|
| unit       	| string 	| source unit                                        	|
| confidence 	| float  	| confidence in value matching                       	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "mol": 70.0,
    "centimol": 7000.0,
    "kilomol": 0.07,
    "scalar": 7.0,
    "unit": "damol",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "mol": 70.0,
    "centimol": 7000.0,
    "kilomol": 0.07,
    "scalar": 7.0,
    "unit": "damol",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Money

| KEY        	| TYPE   	| DESCRIPTION                     	|
|------------	|--------	|---------------------------------	|
| amount     	| float  	| source value                    	|
| ISO_code   	| string 	| ISO 4217 standard currency code 	|
| symbol     	| string 	| currency symbol                 	|
| confidence 	| float  	| confidence in value matching    	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "amount": 9.7,
    "ISO_code": "USD",
    "symbol": "$",
    "scalar": 9.7,
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "amount": 9.7,
    "ISO_code": "USD",
    "symbol": "$",
    "scalar": 9.7,
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Ordinal

| KEY        	| TYPE  	| DESCRIPTION                              	|
|------------	|-------	|------------------------------------------	|
| rank       	| int   	| ranking of the ordinal value. First is 1 	|
| confidence 	| float 	| confidence in value matching             	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "rank": 42,
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "rank": 42,
    "confidence": 0.99
}
```

</TabItem>
</Tabs>


## Percent

| KEY        	| TYPE   	| DESCRIPTION                                      	|
|------------	|--------	|--------------------------------------------------	|
| percent    	| float  	| percentage value expressend in percents (%, pct) 	|
| scalar     	| float  	| source value                                     	|
| unit       	| string 	| source unit                                      	|
| confidence 	| float  	| confidence in value matching                     	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "percent": 43.355,
    "scalar": 43355.0,
    "unit": "ppb",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "percent": 43.355,
    "scalar": 43355.0,
    "unit": "ppb",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Phone

| KEY          	| TYPE   	| DESCRIPTION                                                  	| CONSTRAINTS                   	|
|--------------	|--------	|--------------------------------------------------------------	|-------------------------------	|
| notation     	| string 	| notation type                                                	| ["national", "international"] 	|
| alpha_2      	| string 	| the ISO 3161-1 alpha2 2 digit code of country                	|                               	|
| alpha_3      	| string 	| the ISO 3161-1 alpha3 3 digit code of country                	|                               	|
| country_name 	| string 	| the name of the country associated to the telephone number   	|                               	|
| contry_code  	| string 	| the phone code of country associated to the telephone number 	|                               	|
| mobile_begin 	| array  	| the first digit of mobile telephone number for this country  	|                               	|
| phone        	| int    	| the telephone number                                         	|                               	|
| confidence   	| float  	| confidence in value matching                                 	|                               	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "notation": "national",
    "country_code": "33",
    "mobile_begin": [
        "6",
        "7"
    ],
    "country_name": "France",
    "alpha_3": "FRA",
    "alpha_2": "FR",
    "phone": "607259475",
    "confidence": 0.89
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "notation": "national",
    "country_code": "33",
    "mobile_begin": [
        "6",
        "7"
    ],
    "country_name": "France",
    "alpha_3": "FRA",
    "alpha_2": "FR",
    "phone": "607259475",
    "confidence": 0.89
}
```

</TabItem>
</Tabs>

## Power

| KEY        	| TYPE   	| DESCRIPTION                  	|
|------------	|--------	|------------------------------	|
| milliwatt  	| float  	| power expressed in milliwatt 	|
| Watt       	| float  	| power expressed in Watt      	|
| kilowatt   	| float  	| power expressed in kilowatt  	|
| megawatt   	| float  	| power expressed in megawatt  	|
| gigawatt   	| float  	| power expressed in gigawatt  	|
| scalar     	| float  	| source unit                  	|
| unit       	| string 	| source unit                  	|
| confidence 	| float  	| confidence in value matching 	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "milliwatt": 7.0,
    "Watt": 0.007,
    "kilowatt": 7e-06,
    "megawatt": 7e-09,
    "gigawatt": 7e-12,
    "scalar": 7.0,
    "unit": "mW",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "milliwatt": 7.0,
    "Watt": 0.007,
    "kilowatt": 7e-06,
    "megawatt": 7e-09,
    "gigawatt": 7e-12,
    "scalar": 7.0,
    "unit": "mW",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Pressure

| KEY         	| TYPE   	| DESCRIPTION                                          	|
|-------------	|--------	|------------------------------------------------------	|
| pascal      	| float  	| pressure expressed in pascals (Pa)                   	|
| hectopascal 	| float  	| pressure expressed in hectopascals (hPa)             	|
| millibar    	| float  	| pressure expressed in millibars (mbar)               	|
| bar         	| float  	| pressure expressed in bars (bar)                     	|
| at          	| float  	| pressure expressed in technical atmospheres (at)     	|
| atm         	| float  	| pressure expressed in atmospheres (atm)              	|
| Torr        	| float  	| pressure expressed in torrs (Torr)                   	|
| psi         	| float  	| pressure expressed in pounds per square inches (psi) 	|
| scalar      	| float  	| source unit                                          	|
| unit        	| string 	| source unit                                          	|
| confidence  	| float  	| confidence in value matching                         	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "psi": 10.97935389,
    "Torr": 567.7969340000001,
    "scalar": 75.7,
    "millibar": 757.0,
    "pascal": 75700.0,
    "unit": "cbar",
    "atm": 0.7471007110000001,
    "bar": 0.757,
    "hectopascal": 757.0,
    "at": 0.7719129,
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "psi": 10.97935389,
    "Torr": 567.7969340000001,
    "scalar": 75.7,
    "millibar": 757.0,
    "pascal": 75700.0,
    "unit": "cbar",
    "atm": 0.7471007110000001,
    "bar": 0.757,
    "hectopascal": 757.0,
    "at": 0.7719129,
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Radioactivity

| KEY        	| TYPE   	| DESCRIPTION                              	|
|------------	|--------	|------------------------------------------	|
| MBq        	| float  	| radioactivity expressed in megaBecquerel 	|
| GBq        	| float  	| radioactivity expressed in gigaBecquerel 	|
| Rd         	| float  	| radioactivity expressed in Rutherford    	|
| Ci         	| float  	| radioactivity expressed in Curie         	|
| kCi        	| float  	| radioactivity expressed in kiloCurie     	|
| scalar     	| float  	| source unit                              	|
| unit       	| string 	| source unit                              	|
| confidence 	| float  	| confidence in value matching             	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "MBq": 2590000000.0,
    "GBq": 259000000000000.0,
    "Rd": 259000000.0,
    "Ci": 7000.0,
    "kCi": 7.0, 
    "scalar": 7.0,
    "unit": "kCi",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "MBq": 2590000000.0,
    "GBq": 259000000000000.0,
    "Rd": 259000000.0,
    "Ci": 7000.0,
    "kCi": 7.0, 
    "scalar": 7.0,
    "unit": "kCi",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Set

| KEY        	| TYPE            	| DESCRIPTION                            	| CONSTRAINTS          	|
|------------	|-----------------	|----------------------------------------	|----------------------	|
| start      	| Date Entity     	| first occurence of in the set          	| always in the future 	|
| step       	| Set Step Object 	| time between two occurences in the set 	|                      	|
| confidence 	| float           	| confidence in value matching           	|                      	|

<Tabs>
<TabItem value="py" label="Python">

```py
"source":"tous les jours",
"value":{
    "confidence": 0.99,
    "start": {
        "ISO": "2019-03-26 11:23:05",
        "chronology": "future",
        "chronology_day": 2,
        "formatted": "Tuesday 26 March 2019 11:23:05",
        "timestamp": 1553595785
    },
    "step": {
        "day": 1,
        "hour": 24,
        "minute": 1440,
        "month": 0.03333333333333333,
        "seconde": 86400,
        "week": 0.14285714285714285,
        "year": 0.0027378507871321013
    }
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{"source":"tous les jours",
"value":{
    "confidence": 0.99,
    "start": {
        "ISO": "2019-03-26 11:23:05",
        "chronology": "future",
        "chronology_day": 2,
        "formatted": "Tuesday 26 March 2019 11:23:05",
        "timestamp": 1553595785
    },
    "step": {
        "day": 1,
        "hour": 24,
        "minute": 1440,
        "month": 0.03333333333333333,
        "seconde": 86400,
        "week": 0.14285714285714285,
        "year": 0.0027378507871321013
    }
}
```

</TabItem>
</Tabs>

### Set Step Object

| KEY    	| TYPE  	|
|--------	|-------	|
| day    	| float 	|
| hour   	| float 	|
| minute 	| float 	|
| month  	| float 	|
| second 	| float 	|
| week   	| float 	|
| year   	| float 	|



## Speed

| KEY        	| TYPE   	| DESCRIPTION                                   	|
|------------	|--------	|-----------------------------------------------	|
| m/s        	| float  	| speed expressed in meters per second (m/s)    	|
| km/h       	| float  	| speed expressed in kilometers per hour (km/h) 	|
| mph        	| float  	| speed expressed in miles per hour (mph)       	|
| kts        	| float  	| speed expressed in knots (kn, kts)            	|
| scalar     	| float  	| source value                                  	|
| unit       	| string 	| source unit                                   	|
| confidence 	| float  	| confidence in value matching                  	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "km/h": 120.0,
    "m/s": 33.333333333333336,
    "kts": 64.79484,
    "mph": 74.56452,
    "scalar": 120.0,
    "unit": "km",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "km/h": 120.0,
    "m/s": 33.333333333333336,
    "kts": 64.79484,
    "mph": 74.56452,
    "scalar": 120.0,
    "unit": "km",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Strength

| KEY         	| TYPE   	| DESCRIPTION                    	|
|-------------	|--------	|--------------------------------	|
| newton      	| float  	| force expressed in newton      	|
| kilonewton  	| float  	| force expressed in kilonewton  	|
| centinewton 	| float  	| force expressed in centinewton 	|
| scalar      	| float  	| source value                   	|
| unit        	| string 	| source value                   	|
| confidence  	| float  	| confidence in value matching   	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "newton": 70.0,
    "centinewton": 7000.0,
    "kilonewton": 0.07,
    "scalar": 7.0,
    "unit": "daN",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "newton": 70.0,
    "centinewton": 7000.0,
    "kilonewton": 0.07,
    "scalar": 7.0,
    "unit": "daN",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Surface

| KEY        	| TYPE   	| DESCRIPTION                                   	|
|------------	|--------	|-----------------------------------------------	|
| meter      	| float  	| surface expressed in square meters (m²)       	|
| kilometer  	| float  	| surface expressed in square kilometers (km²)  	|
| centimeter 	| float  	| surface expressed in square centimeters (cm²) 	|
| miles      	| float  	| surface expressed in square miles (mi²)       	|
| ares       	| float  	| surface expressed in ares                     	|
| hectares   	| float  	| surface expressed in hectares                 	|
| inches     	| float  	| surface expressed in square inches (in²)      	|
| scalar     	| float  	| source value                                  	|
| unit       	| string 	| source unit                                   	|
| confidence 	| float  	| confidence in value matching                  	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "meter": 43000.0,
    "centimeter": 430000000.0,
    "kilometer": 0.043,
    "hectares": 4.3,
    "inches": 66650000.0,
    "miles": 0.0166023,
    "ares": 430.0,
    "scalar": 4.3,
    "unit": "ha",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "meter": 43000.0,
    "centimeter": 430000000.0,
    "kilometer": 0.043,
    "hectares": 4.3,
    "inches": 66650000.0,
    "miles": 0.0166023,
    "ares": 430.0,
    "scalar": 4.3,
    "unit": "ha",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Surface Tension

| KEY          	| TYPE   	| DESCRIPTION                                                	|
|--------------	|--------	|------------------------------------------------------------	|
| N/meter      	| float  	| surface tension expressed in newtons per meter (N/m)       	|
| N/kilometer  	| float  	| surface tension expressed in newtons per kilometer (N/km)  	|
| N/centimeter 	| float  	| surface tension expressed in newtons per centimeter (N/cm) 	|
| scalar       	| float  	| source value                                               	|
| unit         	| string 	| source unit                                                	|
| confidence   	| float  	| confidence in value matching                               	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "N/centimeter": 20.0,
    "N/meter": 0.2,
    "N/kilometer": 0.0002,
    "scalar": 2.0,
    "unit": "dm",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "N/centimeter": 20.0,
    "N/meter": 0.2,
    "N/kilometer": 0.0002,
    "scalar": 2.0,
    "unit": "dm",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Temperature

| KEY        	| TYPE   	| DESCRIPTION                              	|
|------------	|--------	|------------------------------------------	|
| celsius    	| float  	| temperature expressed in Celsius (°C)    	|
| fahrenheit 	| float  	| temperature expressed in Fahrenheit (°F) 	|
| kelvin     	| float  	| temperature expressed in Kelvin (K)      	|
| rakine     	| float  	| temperature expressed in Rakine (°R)     	|
| scalar     	| float  	| source value                             	|
| unit       	| string 	| source unit                              	|
| confidence 	| float  	| confidence in value matching             	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "rankine": 559.17,
    "fahrenheit": 99.5,
    "kelvin": 310.65,
    "celsius": 37.5,
    "scalar": 37.5,
    "unit": "C",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "rankine": 559.17,
    "fahrenheit": 99.5,
    "kelvin": 310.65,
    "celsius": 37.5,
    "scalar": 37.5,
    "unit": "C",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Time

| KEY            	| TYPE   	| DESCRIPTION                             	| CONSTRAINTS 	|
|----------------	|--------	|-----------------------------------------	|-------------	|
| ISO            	| string 	| ISO formatted time                      	| hh:mi       	|
| formatted      	| string 	| time written in english                 	|             	|
| chronology     	| string 	| if time is: future / past or present    	|             	|
| chronology_min 	| int    	| number minute in diff time with present 	|             	|
| confidence     	| float  	| confidence for this entitie             	|             	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "ISO": "5:30",
    "formatted": "datetime.time(5, 30)",
    "chronology": "past",
    "chronology_min": 745,
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "ISO": "5:30",
    "formatted": "datetime.time(5, 30)",
    "chronology": "past",
    "chronology_min": 745,
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## URL

| KEY        	| TYPE   	| DESCRIPTION                       	|
|------------	|--------	|-----------------------------------	|
| sheme      	| string 	| the URL scheme (http/https/ssh..) 	|
| fragment   	| string 	| The anchor of the URL             	|
| query      	| string 	| The query parameters of the URL   	|
| host       	| string 	| Tthe host of the URL              	|
| confidence 	| float  	| confidence for this entitie       	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "sheme": "https",
    "fragment": null,
    "query": "love=you",
    "host": "man.lettria.com",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "sheme": "https",
    "fragment": null,
    "query": "love=you",
    "host": "man.lettria.com",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Voltage

| KEY        	| TYPE   	| DESCRIPTION                          	|
|------------	|--------	|--------------------------------------	|
| volt       	| float  	| voltage expressed in volts (V)       	|
| kilovolt   	| float  	| voltage expressed in kilovolts (kV)  	|
| centivolt  	| float  	| voltage expressed in centivolts (cV) 	|
| scalar     	| float  	| source value                         	|
| unit       	| string 	| source unit                          	|
| confidence 	| float  	| confidence in value matching         	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "volt": 70.0,
    "centivolt": 7000.0,
    "kilovolt": 0.07,
    "scalar": 7.0,
    "unit": "daV",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "volt": 70.0,
    "centivolt": 7000.0,
    "kilovolt": 0.07,
    "scalar": 7.0,
    "unit": "daV",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>

## Volume

| KEY        	| TYPE   	| DESCRIPTION                                 	|
|------------	|--------	|---------------------------------------------	|
| decimeter  	| float  	| volume expressed in cubic decimeters (dm³)  	|
| meter      	| float  	| volume expressed in cubic meters (m³)       	|
| kilometer  	| float  	| volume expressed in cubic kilometers (km³)  	|
| centimeter 	| float  	| volume expressed in cubic centimeters (cm³) 	|
| miles      	| float  	| volume expressed in cubic miles (mi³)       	|
| inches     	| float  	| volume expressed in cubic inches (in³)      	|
| feet       	| float  	| volume expressed in cubic feet (ft³)        	|
| yard       	| float  	| volume expressed in cubic yards (yd³)       	|
| gallon     	| float  	| volume expressed in gallons (gal)           	|
| teaspoon   	| float  	| volume expressed in teaspoons (tsp)         	|
| tablespoon 	| float  	| volume expressed in tablespoons (tp)        	|
| liter      	| float  	| volume expressed in liters (L)              	|
| milliliter 	| float  	| volume expressed in milliliters (mL)        	|
| scalar     	| float  	| source value                                	|
| unit       	| string 	| source unit                                 	|
| confidence 	| float  	| confidence in value matching                	|

<Tabs>
<TabItem value="py" label="Python">

```py
{
    "milliliter": 43000.0,
    "meter": 0.043,
    "feet": 1.518545,
    "miles": 1.033079195851154e-11,
    "kilometer": 4.3e-11,
    "teaspoon": 8724.02067795785,
    "inches": 2624.0191,
    "liter": 43.0,
    "tablespoon": 2908.0068926526164,
    "centimeter": 43000.0,
    "gallon": 11.359396,
    "decimeter": 43.0,
    "yard": 0.05624185,
    "scalar": 43.0,
    "unit": "dm",
    "confidence": 0.99
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
    "milliliter": 43000.0,
    "meter": 0.043,
    "feet": 1.518545,
    "miles": 1.033079195851154e-11,
    "kilometer": 4.3e-11,
    "teaspoon": 8724.02067795785,
    "inches": 2624.0191,
    "liter": 43.0,
    "tablespoon": 2908.0068926526164,
    "centimeter": 43000.0,
    "gallon": 11.359396,
    "decimeter": 43.0,
    "yard": 0.05624185,
    "scalar": 43.0,
    "unit": "dm",
    "confidence": 0.99
}
```

</TabItem>
</Tabs>