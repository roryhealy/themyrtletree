import React, { useEffect, useRef } from 'react';

class RandomObjectMover {
  // Not my code! This was adapted from https://jsfiddle.net/bf9nv1q6/
  // Changes include TypeScript compatibility, and
  $object: HTMLElement;
  $container: Window;
  pixels_per_second: number;
  current_position: { x: number; y: number };
  is_running: boolean;
  boundEvent: () => void;

  constructor(obj: HTMLElement, container: Window, initialPosition: { x: number; y: number }) {
    this.$object = obj;
    this.$container = container;
    this.pixels_per_second = 50;
    this.current_position = initialPosition;
    this.is_running = false;
    this.boundEvent = () => {};
  }

  _getContainerDimensions() {
    if (this.$container === window) {
      return { height: this.$container.innerHeight, width: this.$container.innerWidth };
    } else {
      return { height: this.$object.clientHeight, width: this.$object.clientWidth };
    }
  }

  _generateNewPosition() {
    // Get container dimensions minus div size
    var containerSize = this._getContainerDimensions();
    var availableHeight = containerSize.height - this.$object.clientHeight;
    var availableWidth = containerSize.width - this.$object.clientHeight;

    // Pick a random place in the space
    var y = Math.floor(Math.random() * availableHeight);
    var x = Math.floor(Math.random() * availableWidth);

    return { x: x, y: y };
  }

  _calcDelta(a: { x: number; y: number }, b: { x: number; y: number }) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
  }

  _moveOnce() {
    // Pick a new spot on the page
    var next = this._generateNewPosition();

    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);

    // Speed of this transition, rounded to 2DP
    var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;

    //console.log(this.current_position, next, delta, speed);
    this.$object.style.transition = 'transform ' + speed + 's linear';
    this.$object.style.transform = 'translate3d(' + next.x + 'px, ' + next.y + 'px, 0)';

    // Save this new position ready for the next call.
    this.current_position = next;
  }

  start() {
    if (this.is_running) {
      return;
    }

    // Make sure our object has the right css set
    this.$object.style.willChange = 'transform';
    this.$object.style.pointerEvents = 'auto';

    this.boundEvent = this._moveOnce.bind(this);

    // Bind callback to keep things moving
    this.$object.addEventListener('transitionend', this.boundEvent);

    // Start it moving
    this._moveOnce();

    this.is_running = true;
  }

  stop() {
    if (!this.is_running) {
      return;
    }
    this.$object.removeEventListener('transitionend', this.boundEvent);
    this.is_running = false;
  }
}

export interface CircleProps {
  position: { x: number; y: number };
  color: string;
}

export default function Circle({ position, color }: CircleProps) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current !== null) {
      const circle = new RandomObjectMover(circleRef.current, window, position);
      circle.start();
    }
  }, [position]);

  return (
    <div
      ref={circleRef}
      className={color + ' sm:h-lg h-72 w-72 sm:w-lg opacity-50 rounded-full absolute top-0 left-0 overflow-hidden'}
    ></div>
  );
}
