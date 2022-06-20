import normalizeString from "../index";

const diacritics = new Map();
beforeAll(() => {
    diacritics.clear();
    diacritics.set("żarłacz", "zarlacz");
    diacritics.set("łatwy", "latwy");
    diacritics.set("łotwa", "lotwa");
})

it("should return 5 for add(2,3)", () => {
    diacritics.forEach((value, key) => {
        expect(normalizeString(key)).toBe(value);
    })
});
