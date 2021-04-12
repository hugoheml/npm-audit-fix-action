const listPackages = require("../listPackages");

test("listPackages()", async () => {
  const packages = await listPackages({ silent: true });
  expect(packages.size).not.toEqual(0);
  expect(packages.get("jest")).toMatch(/^\d+\.\d+\.\d+$/u);
  expect(packages.get("@actions/core")).toMatch(/^\d+\.\d+\.\d+$/u);
});