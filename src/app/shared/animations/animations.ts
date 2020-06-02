import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const animations = [
  trigger('slideInLeft', [
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
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

export const fadeAnimation = [
  query(':enter', [style({ opacity: 0 })], { optional: true }),
  query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], { optional: true }),
  query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true })
];

export const routeAnimation = [
  trigger('routeAnimations', [
    transition('* => iphone', slideToLeft),
    transition('* => macbook', slideToLeft),
    transition('* => watch', slideToLeft)
  ])
]







