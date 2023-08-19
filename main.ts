function TraverseRow (p_x: number, p_y: number) {
    xPos = p_x
    yPos = p_y
    // Move right if starting at 0 and left if starting at 4
    if (p_x == 0) {
        Adjust = 1
    } else {
        Adjust = -1
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(xPos, yPos)
        basic.pause(Speed_Delay)
        led.toggle(xPos, yPos)
        if (index < 4) {
            xPos += Adjust
        }
    }
    if (direction == "DOWN") {
        yPos += 1
    } else {
        yPos += -1
    }
    if (yPos < 0) {
        if (xPos == 0) {
            InitialiseNW()
        } else {
            InitialiseNE()
        }
        TraverseRow(x, y)
    } else if (yPos > 4) {
        if (xPos == 0) {
            InitialiseSW()
        } else {
            InitialiseSE()
        }
        TraverseRow(x, y)
    } else {
        TraverseRow(xPos, yPos)
    }
}
input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        if (y == 0) {
            InitialiseNE()
        } else {
            InitialiseNW()
        }
    } else {
        if (y == 0) {
            InitialiseSE()
        } else {
            InitialiseSW()
        }
    }
    DisplayStart()
})
function InitialiseSE () {
    x = 4
    y = 4
    direction = "UP"
}
function DisplayStart () {
    basic.clearScreen()
    led.plot(x, y)
}
function InitialiseNW () {
    x = 0
    y = 0
    direction = "DOWN"
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    TraverseRow(x, y)
})
function InitialiseSW () {
    x = 0
    y = 4
    direction = "UP"
}
function InitialiseNE () {
    x = 4
    y = 0
    direction = "DOWN"
}
let y = 0
let x = 0
let direction = ""
let Adjust = 0
let yPos = 0
let xPos = 0
let Speed_Delay = 0
Speed_Delay = 50
InitialiseNW()
DisplayStart()
