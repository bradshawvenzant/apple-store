import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const animations = [
  trigger('slideInLeft', [
    transition('void => *', [
      style({ transform: 'translateX(-10%)', opacity: 0 }),
      animate('0.6s')
    ])
  ]),
  trigger('slideInRight', [
    transition('void => *', [
      style({ transform: 'translateX(50%)', opacity: 0 }),
      animate('0.6s')
    ])
  ]),
  trigger('slideUp', [
    transition('void => *', [
      style({ marginTop: '30px' }),
      animate('0.6s')
    ])
  ]),
  trigger('welcomeWrapper', [
    transition('void => *', [
      style({ padding: 0 }),
      group([
        query('@welcomeApple, @welcomelabel', animateChild()),
        animate('1s'),
      ]),
    ])
  ]),
  trigger('topHeader', [
    transition('void => *', [
      style({ marginTop: -80 }),
      animate('1s')
    ])
  ]),
  trigger('welcomeApple', [
    transition('void => *', [
      style({ transform: 'scale(0)' }),
      animate('1s')
    ])
  ]),
  trigger('welcomelabel', [
    transition('void => *', [
      style({ opacity: 0, transform: 'scale(1.2)' }),
      animate('1s')
    ])
  ]),
  trigger('slideInTop', [
    transition('void => *', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('0.6s')
    ])
  ]),
  trigger('slideInBottom', [
    transition('void => *', [
      style({ transform: 'translateY(100px)', opacity: 0 }),
      animate('0.6s')
    ])
  ]),
  trigger('zoomIn', [
    transition('void => *', [
      style({ transform: 'scale(1.2)' }),
      animate('0.6s')
    ])
  ])
];

export const slideToTop = [
  query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
  query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),
  group([
    query(':leave', [
      animate('.3s ease-in-out', style({ transform: 'translateY(-100%)' })),
    ], { optional: true }),
    query(':enter', [
      animate('.3s ease-in-out', style({ transform: 'translateY(0%)' })),
    ], { optional: true })
  ])
];

export const slideToLeft = [
  query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
  query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
  group([
    query(':leave', [
      animate('.3s ease-in-out', style({ transform: 'translateX(-100%)' })),
    ], { optional: true }),
    query(':enter', [
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' })),
    ], { optional: true })
  ])
];

export const slideToRight = [
  query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
  query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateX(-100%)' }), { optional: true }),
  group([
    query(':leave', [
      animate('.3s ease-in-out', style({ transform: 'translateX(100%)' })),
    ], { optional: true }),
    query(':enter', [
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' })),
    ], { optional: true })
  ])
];

export const fadeAnimation = [
  query(':enter', [style({ opacity: 0 })], { optional: true }),
  query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], { optional: true }),
  query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true })
];

export const routeAnimation = [
  trigger('routeAnimations', [
    transition('* => iphone', slideToLeft),
    transition('* => macbook', slideToLeft),
    transition('* => watch', slideToLeft),
    transition('signIn => signUp', slideToRight),
    transition('signUp => signIn', slideToLeft)
  ])
]







