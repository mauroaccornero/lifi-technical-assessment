import { test, expect } from "@playwright/test";

test("view detail test", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle("Tokens explorer");
  page.getByTestId("token-item-0").click();

  await expect(page.getByTestId("token-detail-name")).toBeVisible();
  await expect(page.getByTestId("token-detail-address")).toBeVisible();
  await expect(page.getByTestId("token-detail-chainId")).toBeVisible();
  await expect(page.getByTestId("token-detail-symbol")).toBeVisible();
  await expect(page.getByTestId("token-detail-price")).toBeVisible();
  await expect(page.getByTestId("token-detail-decimals")).toBeVisible();
  await expect(page.getByTestId("token-detail-coinKey")).toBeVisible();
  await expect(page.getByTestId("token-image")).toBeVisible();
  await expect(page.getByTestId("link-back-home")).toBeVisible();
  await expect(page.getByTestId("favorite-button")).toBeVisible();
});
