import {test, expect} from '@playwright/test';

test('New patient test', async ({ page }) => {
    await page.goto("http://localhost/login")
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByPlaceholder('Email').fill('admin@gmail.com')
    await page.getByPlaceholder('Password').fill('123456')
    await page.getByRole('button',{name:'Login'}).click()   
    //new patient registration
    await page.locator(".newpatient").click()
    await expect(page).toHaveURL("http://localhost/patients/create");    // Patient details Adding
    await page.locator('#ownername').fill("Rocky")
    await page.locator('#name').fill('Rocky')
    await page.locator('#address').fill("123 main street, fine lane lane")
    await page.locator("#mobile").fill("458225589")
    await page.locator("#email").fill("black@gmail.com")    
    //await page.locator('#select2-species_id-container').selectOption("Pamerian")
    //Species dropdown
    await page.locator("#select2-species_id-container").click()
    await page.locator(".select2-search__field").fill("black dog")
    await page.locator('.select2-results__option', { hasText: '(new)' }).click();
    //await page.locator('li', { hasText: '(new)' }).click()
    //Gender dropdown
    await page.locator('#gender').selectOption("Male")  
    //await page.locator('#age').fill("03031993")
    await page.locator('#breed').fill("black german dog")
    
    //Drpdown
    await page.locator('#feeding_pattern').selectOption("Mixed Food")
    await page.getByRole('button',{name: 'Register Patient'}).click()   
    await expect(page.getByRole('heading', { name: 'Patients List' })).toBeVisible();
})