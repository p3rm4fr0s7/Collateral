import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto( URI/ARTICLE, { timeout: 3000 });
  await page.getByRole('button', { name: 'Alles akzeptieren' }).click({ timeout: 3000 });
  await page.getByRole('button', { name: 'Toggle Item Pos. 20' }).getByRole('button').click({ timeout: 3000 });
  await page.goto( URI/CART, { timeout: 3000 });
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByLabel('Firma').fill('Test');
  await page.getByLabel('Vorname').fill('John');
  await page.getByLabel('Nachname').fill('Doe');
  await page.getByLabel('Adresszusatz').fill('123');
  await page.getByLabel('Strasse').fill('Main Street');
  await page.getByLabel('Postleitzahl').fill('12345');
  await page.getByLabel('Stadt').fill('123');
  await page.getByLabel('Hausnummer').fill('123');
  await page.getByLabel('E-Mail', { exact: true }).fill('john.doe@example.com');
  await page.getByLabel('E-Mail Bestätigung').fill('john.doe@example.com');
  await page.getByRole('textbox', { name: 'Bitte eingeben' }).fill('This is just a test');
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.locator('#boschPaymentMethodCode-2').check();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.locator('label').filter({ hasText: 'Ich habe die Allgemeinen' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Ich habe die Datenschutzhinweise zur Kenntnis genommen.' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Ich habe zur Kenntnis' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Kostenpflichtig bestellen' }).click();
  await expect(page.locator('h1')).toContainText('Vielen Dank für deine Bestellung.');
});
