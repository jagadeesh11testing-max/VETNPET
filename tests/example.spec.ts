import { test, expect } from '@playwright/test';

test('VETNPET', async ({ page }) => {

  await page.goto("http://localhost/login")

  await page.getByPlaceholder('Email').fill('admin@gmail.com')
  await page.getByPlaceholder('Password').fill('123456')
  await page.getByRole('button', { name: 'Login' }).click()

  //after login
//  await page.getByRole('heading', { name: 'New Patient'}).click()
  await page.getByRole('heading', {name:'New Patient'}).click()
  await page.getByRole('textbox',{name:"Owner Name:"}).fill("Kiran")
  await page.locator('#name').fill('rockey1')
//  await page.getByRole('textbox', {name: 'Name'}).fill('Rockey')
  //await page.getByRole('textbox', {name:'address'}).fill("Address: 123 main street, lane lane")
  await page.locator('#address').fill("Address: 123 main street, fine lane lane")
  //await page.getByRole("textbox", {name: ''})
  await page.getByRole("textbox", {name: 'Mobile Number:'}).fill("458225554")
  await page.getByRole('textbox', {name: 'Email Address:'}).fill("rockey1@gmail.com")
  //await page.locator('input[type="search"]').click() 
  //await page.locator('input[type="search"]').first().click();
//  await page.getByRole("combobox", {name: 'Gender:'}).nth(1).click()
//  await page.getByRole('textbox', {name: 'Age:'}).fill("03031993")
  await page.locator('#gender').selectOption("Male")
//  await page.locator('#age').fill("03031993")
  await page.getByRole('textbox', {name: 'Breed:'}).fill("German shepherd")
//  await page.locator("#select2-feeding_pattern-container").selectOption("Pet Food")
//  await page.getByRole('combobox', {name: 'Feeding Pattern:'}).selectOption("Pet Food")
  //await page.locator('#select2-feeding_pattern-container').click();
  //await page.locator('#select2-feeding_pattern-container').nth(2).click();
//await page.getByRole('button',{name: 'Register Patient'}).click()

// await page.getByRole('combobox', { name: 'Feeding Pattern:' }).click()
// await page.getByRole('option', { name: 'Pet Food' }).click()

await page.locator('#select2-feeding_pattern-container').click()
await page.locator('li:has-text("Pet Food")').click()
await page.getByRole('button',{name: 'Register Patient'}).click()

});
