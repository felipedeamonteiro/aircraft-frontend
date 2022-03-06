# Aircraft scheduling

## Especifications and used technologies

This project was built using `React` with `NextJs` version `12.1.0` with `Typescript`.

`Node` version is `14.18.1` and the package manager is `yarn` version `1.22.5`.

## How to run the project

1. `git clone https://github.com/felipedeamonteiro/aircraft-frontend`

2. `cd aircraft-frontend`

3. `yarn`

4. `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes related the solution

Here I present what were the requirements fulfilled.

[x] The app shows a list of all our aircrafts to choose from.

[x] The app shows a list of all the flights the airline plan to operate that day, their origin, destination, departure time and arrival time.

[x] The purpose of the app is to allow the user to view and edit the daily rotation for each aircraft:

- [] The rotation is the list of flights, in order, an individual aircraft will operate during that day.
- [x] Flights must be chosen by the user from our list of flights (right sidebar on the wireframe).
- [] The app lets the user edit the rotation freely but enforces the following rules:
  - [] All aircrafts must be on the ground at midnight.
  - [x] The turnaround time (minimum time between the end of a flight and the beginning of the next one) is always 20min for our airline.
  - [] Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much!
  - [x] We operate one type of aircraft.

[x] As per aviation practice, all times are UTC (GMT), the app makes no use of local time. Airports are displayed using their four letter code.

[x] Utilisation: The app must display for each aircraft its utilisation in percent, i.e. the time the aircraft is on scheduled service per 24 hours (as opposed to sitting idle on the apron costing us money).

[x] Aircraft timeline: for the selected aircraft, a horizontal bar shows a period of 24 hours, scheduled service in green, turnaround time in purple, idle time in grey.
