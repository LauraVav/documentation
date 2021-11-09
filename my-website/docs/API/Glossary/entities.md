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

## Bandwidth

| KEY        	| TYPE   	| DESCRIPTION                              	|
|------------	|--------	|------------------------------------------	|
| kbps       	| float  	| bandwidth expressed in kilobit by second 	|
| Mbps       	| float  	| bandwidth expressed in megabit by second 	|
| Gbps       	| float  	| bandwidth expressed in gigabit by second 	|
| scalar     	| float  	| source value                             	|
| unit       	| string 	| source unit of bandwidth                 	|
| confidence 	| float  	| confidence in value matching             	|


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

## Date

| KEY            	| TYPE   	| DESCRIPTION                                                                                	| CONSTRAINTS                                                                       	|
|----------------	|--------	|--------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------	|
| ISO            	| string 	| ISO 8601 format                                                                            	| aaaa-mm-dd                                                                        	|
| formatted      	| string 	| the date written in english                                                                	| [weekday name] [Day of the month as a decimal number [01,31]] [month name] [year] 	|
| chronology     	| string 	| indicates the chronological relationship between the timestamp of the message and the date 	| ['future', 'past', 'present']                                                     	|
| chronology_day 	| int    	| number of days between the date and the timestamp of the message                           	|                                                                                   	|
| confidence     	| float  	| confidence for this entity                                                                 	|                                                                                   	|

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

## Electric Power

| KEY         	| TYPE   	| DESCRIPTION                                   	|
|-------------	|--------	|-----------------------------------------------	|
| scalar      	| float  	| source value                                  	|
| unit        	| string 	| source unit                                   	|
| confidence  	| float  	| confidence in value matching                  	|
| ampere      	| float  	| electric power expressed in amperes (A)       	|
| kiloampere  	| float  	| electric power expressed in kiloamperes (kA)  	|
| centiampere 	| float  	| electric power expressed in centiamperes (cA) 	|

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

## Mol

| KEY        	| TYPE   	| DESCRIPTION                                        	|
|------------	|--------	|----------------------------------------------------	|
| mol        	| float  	| amount of substance expressed in moles (mol)       	|
| kilomol    	| float  	| amount of substance expressed in kilomoles (kmol)  	|
| centimol   	| float  	| amount of substance expressed in centimoles (cmol) 	|
| scalar     	| float  	| source value                                       	|
| unit       	| string 	| source unit                                        	|
| confidence 	| float  	| confidence in value matching                       	|

## Money

| KEY        	| TYPE   	| DESCRIPTION                     	|
|------------	|--------	|---------------------------------	|
| amount     	| float  	| source value                    	|
| ISO_code   	| string 	| ISO 4217 standard currency code 	|
| symbol     	| string 	| currency symbol                 	|
| confidence 	| float  	| confidence in value matching    	|

## Ordinal

| KEY        	| TYPE  	| DESCRIPTION                              	|
|------------	|-------	|------------------------------------------	|
| rank       	| int   	| ranking of the ordinal value. First is 1 	|
| confidence 	| float 	| confidence in value matching             	|

## Percent

| KEY        	| TYPE   	| DESCRIPTION                                      	|
|------------	|--------	|--------------------------------------------------	|
| percent    	| float  	| percentage value expressend in percents (%, pct) 	|
| scalar     	| float  	| source value                                     	|
| unit       	| string 	| source unit                                      	|
| confidence 	| float  	| confidence in value matching                     	|

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

## Set

| KEY        	| TYPE            	| DESCRIPTION                            	| CONSTRAINTS          	|
|------------	|-----------------	|----------------------------------------	|----------------------	|
| start      	| Date Entity     	| first occurence of in the set          	| always in the future 	|
| step       	| Set Step Object 	| time between two occurences in the set 	|                      	|
| confidence 	| float           	| confidence in value matching           	|                      	|

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

## Strength

| KEY         	| TYPE   	| DESCRIPTION                    	|
|-------------	|--------	|--------------------------------	|
| newton      	| float  	| force expressed in newton      	|
| kilonewton  	| float  	| force expressed in kilonewton  	|
| centinewton 	| float  	| force expressed in centinewton 	|
| scalar      	| float  	| source value                   	|
| unit        	| string 	| source value                   	|
| confidence  	| float  	| confidence in value matching   	|

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

## Surface Tension

| KEY          	| TYPE   	| DESCRIPTION                                                	|
|--------------	|--------	|------------------------------------------------------------	|
| N/meter      	| float  	| surface tension expressed in newtons per meter (N/m)       	|
| N/kilometer  	| float  	| surface tension expressed in newtons per kilometer (N/km)  	|
| N/centimeter 	| float  	| surface tension expressed in newtons per centimeter (N/cm) 	|
| scalar       	| float  	| source value                                               	|
| unit         	| string 	| source unit                                                	|
| confidence   	| float  	| confidence in value matching                               	|

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

## Time

| KEY            	| TYPE   	| DESCRIPTION                             	| CONSTRAINTS 	|
|----------------	|--------	|-----------------------------------------	|-------------	|
| ISO            	| string 	| ISO formatted time                      	| hh:mi       	|
| formatted      	| string 	| time written in english                 	|             	|
| chronology     	| string 	| if time is: future / past or present    	|             	|
| chronology_min 	| int    	| number minute in diff time with present 	|             	|
| confidence     	| float  	| confidence for this entitie             	|             	|

## URL

| KEY        	| TYPE   	| DESCRIPTION                       	|
|------------	|--------	|-----------------------------------	|
| sheme      	| string 	| the URL scheme (http/https/ssh..) 	|
| fragment   	| string 	| The anchor of the URL             	|
| query      	| string 	| The query parameters of the URL   	|
| host       	| string 	| Tthe host of the URL              	|
| confidence 	| float  	| confidence for this entitie       	|

## Voltage

| KEY        	| TYPE   	| DESCRIPTION                          	|
|------------	|--------	|--------------------------------------	|
| volt       	| float  	| voltage expressed in volts (V)       	|
| kilovolt   	| float  	| voltage expressed in kilovolts (kV)  	|
| centivolt  	| float  	| voltage expressed in centivolts (cV) 	|
| scalar     	| float  	| source value                         	|
| unit       	| string 	| source unit                          	|
| confidence 	| float  	| confidence in value matching         	|

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