const enum Enum1 {
   A0 = 100,
}

const enum Enum1 {
    // correct cases
    A,
    B,
    C = 10,
    D = A | B,
    E = A | 1,
    F = 1 | A,
    G = (1 & 1),
    H = ~(A | B),
    I = A >>> 1,
    J = 1 & A,
    K = ~(1 | 5),
    L = ~D,
    M = E << B,
    N = E << 1,
    O = E >> B,
    P = E >> 1,
    Q = -D,
    R = C & 5,
    S = 5 & C,
    T = C | D,
    U = C | 1,
    V = 10 | D,
    W = Enum1.V,

    // correct cases: reference to the enum member from different enum declaration
    W1 = A0,
    W2 = Enum1.A0,
    W3 = Enum1["A0"],
    W4 = Enum1["W"],
}


module A {
    export module B {
        export module C {
            export const enum E {
                V1 = 1,
                V2 = A.B.C.E.V1 | 100
            }
        }
    }
}

module A {
    export module B {
        export module C {
            export const enum E {
                V3 = A.B.C.E["V2"] & 200,
            }
        }
    }
}

module A1 {
    export module B {
        export module C {
            export const enum E {
                V1 = 10,
                V2 = 110,
            }
        }
    }
}

module A2 {
    export module B {
        export module C {
            export const enum E {
                V1 = 10,
                V2 = 110,
            }
        }
        // module C will be classified as value
        export module C {
            var x = 1
        }
    }
}

import I = A.B.C.E;
import I1 = A1.B;
import I2 = A2.B;

function foo0(e: I): void {
    if (e === I.V1) {
    }
    else if (e === I.V2) {
    }
}

function foo1(e: I1.C.E): void {
    if (e === I1.C.E.V1) {
    }
    else if (e === I1.C.E.V2) {
    }
}

function foo2(e: I2.C.E): void {
    if (e === I2.C.E.V1) {
    }
    else if (e === I2.C.E.V2) {
    }
}


function foo(x: Enum1) {
    switch (x) {
        case Enum1.A:
        case Enum1.B:
        case Enum1.C:
        case Enum1.D:
        case Enum1.E:
        case Enum1.F:
        case Enum1.G:
        case Enum1.H:
        case Enum1.I:
        case Enum1.J:
        case Enum1.K:
        case Enum1.L:
        case Enum1.M:
        case Enum1.N:
        case Enum1.O:
        case Enum1.P:
        case Enum1.Q:
        case Enum1.R:
        case Enum1.S:
        case Enum1["T"]:
        case Enum1.U:
        case Enum1.V:
        case Enum1.W:
        case Enum1.W1:
        case Enum1.W2:
        case Enum1.W3:
        case Enum1.W4:
            break;
    }
}

function bar(e: A.B.C.E): number {
    switch (e) {
        case A.B.C.E.V1: return 1;
        case A.B.C.E.V2: return 1;
        case A.B.C.E.V3: return 1;
    }
}

module M1 {
    export const enum Enum1 { X = 100, Y = X + 1 }
}

const enum Enum3 {
    Z = M1.Enum1.Y
}

enum Enum4 { V = 100 }
const enum Enum5 { V = Enum4.V + 100 } // allow references to constant members of regular enums

var value1 = M1.Enum1.Y;
var value2 = Enum3.Z
var value3 = Enum5.V;;