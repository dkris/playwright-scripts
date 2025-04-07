import { test, expect } from '@playwright/test';

test('star playwright-mcp repository', async ({ page }) => {
  // Navigate to the playwright-mcp repository
  await page.goto('https://github.com/microsoft/playwright-mcp');
  
  // Find and click the star button
  // Note: User needs to be logged in to GitHub for this to work
  const starButton = page.getByRole('button', { name: /star this repository/i });
  await starButton.click();
  
  // Verify the repository is starred
  await expect(page.getByRole('button', { name: /unstar this repository/i })).toBeVisible();
});
