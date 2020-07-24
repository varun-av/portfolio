import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  query,
  stagger,
  animateChild,
  style,
  animate,
  keyframes,
  state,
} from "@angular/animations";

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
  ],
})
export class AppComponent implements OnInit {
  title = "home";
  state = "invisible";
  logo = [
    "assets/images/angular.png",
    "assets/images/hype.png",
    "assets/images/d3.png",
    "assets/images/inkscape.png",
    "assets/images/nodejs.png",
    "assets/images/mongo.png",
    "assets/images/aws.png",
  ];
  index = 0;
  image = "";

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
