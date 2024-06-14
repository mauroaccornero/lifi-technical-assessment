import { test, expect } from "@playwright/test";

test("search interaction test", async ({ page }) => {
  await page.goto("");

  const inputText = "pepe";
  const input = page
    .getByTestId("searchInput")
    .getByPlaceholder("Search for tokens");
  await expect(input).toBeVisible();
  input.fill(inputText);

  await expect(page.getByTestId("token-item-0-name")).toContainText(inputText, {
    ignoreCase: true,
  });

  page.getByTestId("token-item-0").click();

  await expect(page.getByTestId("token-detail-name")).toContainText(inputText, {
    ignoreCase: true,
  });

  page.getByTestId("link-back-home").click();

  await expect(input).toBeVisible();
});
