CutebotPro.pwmCruiseControl(70, 70)
basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 30) {
        CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle90)
        if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 15) {
            CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle180)
            if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 15) {
                CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, CutebotProAngle.Angle90)
            }
        }
    }
    CutebotPro.pwmCruiseControl(70, 70)
})
