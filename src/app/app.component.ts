import { Component, OnInit, HostListener } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state,
} from "@angular/animations";
import { faSkype, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  animations: [
    trigger("animate", [
      state("invisible", style({ opacity: 0 })),
      state("visible", style({ opacity: 1 })),
      transition(
        "invisible => visible",

        animate(
          "{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)",

          keyframes([
            style({ opacity: 0, transform: "scale(0.3)", offset: 0 }),
            style({ transform: "scale(1.1)", offset: 0.3 }),
            style({ transform: "scale(0.9)", offset: 0.5 }),
            style({ opacity: 1, transform: "scale(1.1)", offset: 1 }),
          ])
        ),
        { params: { timing: "1s", delay: "" } }
      ),
      transition(
        "visible => invisible",
        [
          style({ opacity: 1 }),

          animate(
            "{{timing}} {{delay}} ease-out",

            keyframes([
              style({ transform: "scale(0.9)", offset: 0.2 }),
              style({ transform: "scale(1.1)", offset: 0.5 }),
              style({ transform: "scale(1.1)", offset: 0.55 }),
              style({ opacity: 0, transform: "scale(0.3)", offset: 1 }),
            ])
          ),
        ],
        { params: { timing: "1s", delay: "" } }
      ),
    ]),
    trigger("float", [
      // state('top', style({transform: 'translateY(0)'})),
      // state('bottom', style({transform: 'translateY(20px)'})),
      transition(
        "void=>top",
        animate(
          "{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)",

          keyframes([
            style({ transform: "translateY(0)", offset: 0 }),
            style({ transform: "translateY(10px)", offset: 0.5 }),
            style({ transform: "translateY(20px)", offset: 1 }),
            // style({ transform: "translateY(-15px)", offset: 0.75 }),
            // style({ transform: "translateY(-5px)", offset: 0.9 }),
            // style({ transform: "translateY(0)", offset: 1 }),
          ])
        ),
        { params: { timing: "", delay: "" } }
      ),
      transition(
        "top=>bottom",
        animate(
          "{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)",

          keyframes([
            style({ transform: "translateY(0)", offset: 0 }),
            style({ transform: "translateY(10px)", offset: 0.5 }),
            style({ transform: "translateY(20px)", offset: 1 }),
            // style({ transform: "translateY(-15px)", offset: 0.75 }),
            // style({ transform: "translateY(-5px)", offset: 0.9 }),
            // style({ transform: "translateY(0)", offset: 1 }),
          ])
        ),
        { params: { timing: "", delay: "" } }
      ),
      transition(
        "bottom=>top",
        animate(
          "{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)",

          keyframes([
            // style({ transform: "translateY(0)", offset: 0 }),
            // style({ transform: "translateY(10px)", offset: 0.25 }),
            // style({ transform: "translateY(20px)", offset: 0.5 }),
            style({ transform: "translateY(20px)", offset: 0 }),
            style({ transform: "translateY(10px)", offset: 0.5 }),
            style({ transform: "translateY(0)", offset: 1 }),
          ])
        ),
        { params: { timing: "", delay: "" } }
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = "profile";
  state = "invisible";
  bgState1 = "bottom";
  bgState2 = "bottom";
  bgState3 = "bottom";
  logo = [
    "assets/images/angular.png",
    "assets/images/react.png",
    "assets/images/d3.png",
    "assets/images/hype.png",
    "assets/images/inkscape.png",
  ];
  index = 0;
  image = "";
  times = 10;
  counter = 0;
  faEnvelope = faEnvelope;
  faSkype = faSkype;
  faLinkedIn = faLinkedin;

  onDone() {
    if (this.counter < this.times) {
      this.bgState1 = this.bgState1 === "top" ? "bottom" : "top";
      this.bgState2 = this.bgState2 === "top" ? "bottom" : "top";
      this.bgState3 = this.bgState3 === "top" ? "bottom" : "top";
      this.counter++;
    }
  }

  ngOnInit() {
    setInterval(() => {
      if (this.state == "invisible") {
        if (this.index < this.logo.length) {
          this.image = this.logo[this.index];
          this.index += 1;
          this.state = "visible";
        } else {
          this.image = this.logo[0];
          this.index = 1;
          this.state = "visible";
        }
      } else {
        this.state = "invisible";
      }
    }, 1000);
  }
}
