import { test, expect } from "@playwright/test";

test("favorite interaction test", async ({ page }) => {
  await page.goto("");

  const inputText = "za";
  const input = page
    .getByTestId("searchInput")
    .getByPlaceholder("Search for tokens");
  await expect(input).toBeVisible();
  input.fill(inputText);

  await expect(page.getByTestId("token-item-0-name")).toContainText(inputText, {
    ignoreCase: true,
  });
  await expect(
    page.getByTestId("token-item-0").getByTestId("not-favorite-token"),
  ).toBeVisible();

  page.getByTestId("token-item-0").click();

  await expect(page.getByTestId("token-detail-name")).toContainText(inputText, {
    ignoreCase: true,
  });

  await expect(page.getByTestId("favorite-button")).toHaveText(
    "Mark as favorite tokens",
  );
  page.getByTestId("favorite-button").click();
  await expect(page.getByTestId("favorite-button")).toHaveText(
    "Remove from favorite tokens",
  );

  page.getByTestId("link-back-home").click();

  await expect(page.getByTestId("token-item-0-name")).toContainText(inputText, {
    ignoreCase: true,
  });
  await expect(
    page.getByTestId("token-item-0").getByTestId("is-favorite-token"),
  ).toBeVisible();
});
