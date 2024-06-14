import { test, expect } from "@playwright/test";

test("view homepage test", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle("Tokens explorer");
  await expect(page.getByTestId("logo")).toHaveText("Tokens explorer");
  await expect(
    page.getByTestId("searchInput").getByPlaceholder("Search for tokens"),
  ).toBeVisible();
  await expect(page.getByTestId("token-item-0-name")).toBeVisible();
  await expect(page.getByTestId("token-item-0-address")).toBeVisible();
  await expect(
    page.getByTestId("token-item-0").getByTestId("token-image"),
  ).toBeVisible();
});
