import { test, expect } from '@playwright/test';

test('check github notifications', async ({ page }) => {
  // Navigate to GitHub notifications page
  await page.goto('https://github.com/notifications');
  
  // Verify we're on the notifications page
  await expect(page).toHaveTitle('Notifications');

  // Check for notifications count in the inbox
  const inboxLink = page.getByRole('link', { name: /inbox/i }).first();
  await expect(inboxLink).toBeVisible();
  
  // Check if there are any unread notifications
  const notificationsList = page.locator('list[role="list"]');
  await expect(notificationsList).toBeVisible();

  // Verify the notification details if there are any
  const notification = page.getByRole('listitem').filter({ hasText: 'cypress-io/cypress' });
  if (await notification.isVisible()) {
    await expect(notification).toContainText('cypress-io/cypress #29766');
  }
});