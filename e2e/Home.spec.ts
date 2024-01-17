import { test, expect } from '@playwright/test';

test.describe("visit home page", () => {

  test.describe("test first name values", () => {    
    test("with invalid values", async ({page}) => {
      const firstName = page.locator("[testid='firstName']");
      const firstNameError = page.locator("[testid='firstNameError']")
  
      await page.goto("/");
  
      await firstName.focus();
      await firstName.fill("test1");
      await firstName.blur();
      expect(await firstNameError.isVisible()).toBe(true);
      expect(await firstNameError.textContent()).toBe("Invalid Firstname.");
    });

    test("with valid values", async ({page}) => {
      const firstName = page.locator("[testid='firstName']");
      const firstNameError = page.locator("[testid='firstNameError']")
  
      await page.goto("/");
  
      await firstName.focus();
      await firstName.fill("Test");
      await firstName.blur();
      expect(await firstNameError.isVisible()).toBe(false);
    });
  });

  test.describe("test last name values", () => {
    test("with invalid values", async ({page}) => {
      const lastName = page.locator("[testid='lastName']");
      const lastNameError = page.locator("[testid='lastNameError']")
  
      await page.goto("/");
  
      await lastName.focus();
      await lastName.fill("test1");
      await lastName.blur();
      expect(await lastNameError.isVisible()).toBe(true);
      expect(await lastNameError.textContent()).toBe("Invalid Lastname.");
    });

    test("with valid values", async ({page}) => {
      const lastName = page.locator("[testid='lastName']");
      const lastNameError = page.locator("[testid='lastNameError']")
  
      await page.goto("/");
  
      await lastName.focus();
      await lastName.fill("Test");
      await lastName.blur();
      expect(await lastNameError.isVisible()).toBe(false);
    });
  });

  test.describe("test birthday values", () => {
    test("with invalid values", async ({page}) => {
      const birthday = page.locator("[testid='birthday']");
      const birthdayError = page.locator("[testid='birthdayError']")
  
      await page.goto("/");
  
      await birthday.focus();
      await birthday.fill("2023-12-12");
      await birthday.blur();
      expect(await birthdayError.isVisible()).toBe(true);
      expect(await birthdayError.textContent()).toBe("Invalid age. Must be 18 or equal or less than 100.");

      await birthday.focus();
      await birthday.fill("232323-12-12");
      await birthday.blur();
      expect(await birthdayError.isVisible()).toBe(true);
      expect(await birthdayError.textContent()).toContain("Invalid date format.");
    });

    test("with valid values", async ({page}) => {
      const birthday = page.locator("[testid='birthday']");
      const birthdayError = page.locator("[testid='birthdayError']")
  
      await page.goto("/");
  
      await birthday.focus();
      await birthday.fill("1970-01-30");
      await birthday.blur();
      expect(await birthdayError.isVisible()).toBe(false);
      expect(await page.locator("[testid='email']").isVisible()).toBe(true);
    });
  });

  test.describe("test email values", () => {
    test("with invalid values", async ({page}) => {
      const birthday = page.locator("[testid='birthday']");
      const email = page.locator("[testid='email']");
      const emailError = page.locator("[testid='emailError']")
  
      await page.goto("/");
  
      await birthday.focus();
      await birthday.fill("1970-01-30");
      await birthday.blur();
      expect(await email.isVisible()).toBe(true);

      await email.focus();
      await email.fill("test1");
      await email.blur();
      expect(await emailError.isVisible()).toBe(true);
      expect(await emailError.textContent()).toBe("Invalid email format.");
    });

    test("with valid values", async ({page}) => {
      const birthday = page.locator("[testid='birthday']");
      const email = page.locator("[testid='email']");
      const emailError = page.locator("[testid='emailError']")
  
      await page.goto("/");

      await birthday.focus();
      await birthday.fill("1970-01-30");
      await birthday.blur();
      expect(await email.isVisible()).toBe(true);

      await email.focus();
      await email.fill("test@gmail.com");
      await email.blur();
      expect(await emailError.isVisible()).toBe(false);
    });
  });

  test.describe('test next button', () => {

    test("with invalid values", async ({page}) => {
      const firstName = page.locator("[testid='firstName']");
      const lastName = page.locator("[testid='lastName']");
      const birthday = page.locator("[testid='birthday']");
      const email = page.locator("[testid='email']");

      await page.goto("/");

      await firstName.focus();
      await firstName.fill('test1');
      await firstName.blur();

      await lastName.focus();
      await lastName.fill('test1');
      await lastName.blur();

      await birthday.focus();
      await birthday.fill('1970-01-30');
      await birthday.blur();
      expect(await email.isVisible()).toBe(true);

      await email.focus();
      await email.fill('test1');
      await email.blur();

      expect(await page.locator("button").isDisabled()).toBe(true);
    });


    test("with valid values", async ({page}) => {
      const firstName = page.locator("[testid='firstName']");
      const lastName = page.locator("[testid='lastName']");
      const birthday = page.locator("[testid='birthday']");
      const email = page.locator("[testid='email']");
      const button = page.locator("button");

      await page.goto("/");

      await firstName.focus();
      await firstName.fill('test');
      await firstName.blur();

      await lastName.focus();
      await lastName.fill('test');
      await lastName.blur();

      await birthday.focus();
      await birthday.fill('1970-01-30');
      await birthday.blur();
      expect(await email.isVisible()).toBe(true);

      await email.focus();
      await email.fill('test@gmail.com');
      await email.blur();

      expect(await button.isEnabled()).toBe(true);
    });
  })
});
