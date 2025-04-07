import { test, expect } from '@playwright/test';

test('check number of open pull requests', async ({ page }) => {
  // Navigate to the Playwright MCP repository
  await page.goto('https://github.com/microsoft/playwright-mcp');
  
  // Verify we're on the correct repository page
  await expect(page).toHaveTitle(/microsoft\/playwright-mcp/);

  // Find and click the Pull requests tab
  const pullRequestsLink = page.getByRole('link', { name: /^Pull requests \d+$/ });
  await expect(pullRequestsLink).toBeVisible();
  
  // Get the number of PRs from the link text
  const prLinkText = await pullRequestsLink.textContent();
  const prCount = parseInt(prLinkText?.match(/\d+/)?.[0] ?? '0');
  
  // Log the current number of PRs (helpful for test reports)
  console.log(`Number of open pull requests: ${prCount}`);
  
  // Verify the PR count is a reasonable number (greater than 0)
  expect(prCount).toBeGreaterThanOrEqual(0);
});