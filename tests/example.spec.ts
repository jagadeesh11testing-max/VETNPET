import { test, expect } from '@playwright/test';

test('VETNPET', async ({ page }) => {

  await page.goto("http://localhost/login")
  await page.getByPlaceholder('Email').fill('admin@gmail.com')
  await page.getByPlaceholder('Password').fill('123456')
  await page.getByRole('button', { name: 'Login' }).click()

  //after login
//  await page.getByRole('heading', { name: 'New Patient'}).click()
  await page.getByRole('heading', {name:'New Patient'}).click()
  await page.getByRole('textbox',{name:"Owner Name:"}).fill("Hari")
  await page.locator('#name').fill('rockey')
//  await page.getByRole('textbox', {name: 'Name'}).fill('Rockey')
  //await page.getByRole('textbox', {name:'address'}).fill("Address: 123 main street, lane lane")
  await page.locator('#address').fill("Address: 123 main street, lane lane")
  //await page.getByRole("textbox", {name: ''})

});
