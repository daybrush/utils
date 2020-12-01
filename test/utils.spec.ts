import { calculateBoundSize, splitBracket, splitComma, splitSpace, splitText } from "../src/index";

describe("utils", () => {
  it("test splitBracket", () => {
    // Given, When
    // background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));-webkit-background-clip: text;-webkit-text-fill-color: transparent;
    const sb1 = splitBracket("splitBracket(a, b, c)a");
    const sb2 = splitBracket("splitBracket(ab(a) bc(b))b");
    const sb3 = splitBracket("splitBracket(ab(ab(a)) a(1))c");
    const sb4 = splitBracket("splitBracket(ab(ab(ab(a)) b(1) c(1)) a)");
    const sb5 = splitBracket("-webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)))");

    // Then
    expect(sb1.prefix).to.be.equals("splitBracket");
    expect(sb1.value).to.be.equals("a, b, c");
    expect(sb1.suffix).to.be.equals("a");

    expect(sb2.prefix).to.be.equals("splitBracket");
    expect(sb2.value).to.be.equals("ab(a) bc(b)");
    expect(sb2.suffix).to.be.equals("b");

    expect(sb3.prefix).to.be.equals("splitBracket");
    expect(sb3.value).to.be.equals("ab(ab(a)) a(1)");
    expect(sb3.suffix).to.be.equals("c");

    expect(sb4.prefix).to.be.equals("splitBracket");
    expect(sb4.value).to.be.equals("ab(ab(ab(a)) b(1) c(1)) a");
    expect(sb4.suffix).to.be.equals("");

    expect(sb5.value).to.be.equals("linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))");
  });
  it("test splitComma", () => {
    // Given, When
    const sb1 = splitComma("a, b, c");
    const sb2 = splitComma("linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))");
    const sb3 = splitComma("-webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)))");
    const sb4 = splitComma("'linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))");
    const sb5 = splitComma("linear, 'left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))");

    // Then
    expect(sb1).to.be.deep.equals(["a", "b", "c"]);
    expect(sb2).to.be.deep.equals(["linear", "left 0", "right 0", "from(rgb(4, 94, 170))", "to(rgb(1, 152, 216))"]);
    expect(sb3).to.be.deep.equals(["-webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)))"]);
    expect(sb4).to.be.deep.equals(["'linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))"]);
    expect(sb5).to.be.deep.equals(["linear", "'left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216))"]);
  });
  it("test splitSpace", () => {
    // Given, When
    const arr = splitSpace("a b c d e f g");
    const arr2 = splitSpace(" '\\'a\\',b' c 'd,e' f g ");
    const arr3 = splitSpace(" a    b    c  d ");
    const arr4 = splitSpace("");
    const arr5 = splitSpace("   ");
    const arr6 = splitSpace(" 1  2 ");
    const arr7 = splitSpace("translate(10px) rotate(10deg)");
    const arr8 = splitSpace("'a b c d e f g");

    // Then
    expect(arr).to.be.deep.equals(["a", "b", "c", "d", "e", "f", "g"]);
    expect(arr2).to.be.deep.equals(["'\\'a\\',b'", "c", "'d,e'", "f", "g"]);
    expect(arr3).to.be.deep.equals(["a", "b", "c", "d"]);
    expect(arr4).to.be.deep.equals([]);
    expect(arr5).to.be.deep.equals([]);
    expect(arr6).to.be.deep.equals(["1", "2"]);
    expect(arr7).to.be.deep.equals(["translate(10px)", "rotate(10deg)"]);
    expect(arr8).to.be.deep.equals(["'a b c d e f g"]);
  });
  it("test clone, semiclone", () => {
    // Given, When
    const arr = splitText("url(https://www.clautic.com/league/wp-content/uploads/unicorn-wallpaper.jpg)", ":");
    const arr2 = splitText("a:a(;);b:a", ";");

    expect(arr).to.be.deep.equals(["url(https://www.clautic.com/league/wp-content/uploads/unicorn-wallpaper.jpg)"]);
    expect(arr2).to.be.deep.equals(["a:a(;)", "b:a"]);
  });
  it("test calculateBoundSize", () => {
    const size1 = calculateBoundSize([100, 100], [0, 0], [100, 50]);
    const size2 = calculateBoundSize([-10, 100], [0, 0], [100, 50]);
    const size3 = calculateBoundSize([100, 100], [0, 0], [100, 50], true);
    const size4 = calculateBoundSize([100, 100], [50, 40], [100, 50], true);
    const size5 = calculateBoundSize([40, 100], [50, 40], [Infinity, 150], true);
    const size6 = calculateBoundSize([0, 0], [0, 0], [Infinity, Infinity], true);
    const size7 = calculateBoundSize([-1, -1], [0, 0], [Infinity, Infinity], true);
    const size8 = calculateBoundSize([30, 10], [300, 150], [Infinity, Infinity], true);
    const size9 = calculateBoundSize([225.3628673950547, 112.68143369752735], [300, 150], [Infinity, Infinity], true);

    expect(size1).to.be.deep.equals([100, 50]);
    expect(size2).to.be.deep.equals([0, 50]);
    expect(size3).to.be.deep.equals([50, 50]);
    expect(size4).to.be.deep.equals([50, 50]);
    expect(size5).to.be.deep.equals([50, 125]);
    expect(size6).to.be.deep.equals([0, 0]);
    expect(size7).to.be.deep.equals([0, 0]);
    expect(size8).to.be.deep.equals([450, 150]);
    expect(size9).to.be.deep.equals([300, 150]);
  });
});
