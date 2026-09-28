import {test,expect} from '@playwright/test'

test("Hover",async ({page})=>
{

})

test("Right click",async ({page})=>
{
    page.getByText("").click({button: 'right'}) //right mouse click
   // .dblclick()
    // dialog.message()
    //.tocontain(" ")
})