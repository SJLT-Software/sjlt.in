from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.on("console", lambda msg: print(f"Browser console: {msg.type} {msg.text}"))
    page.goto("http://localhost:8000")
    page.wait_for_timeout(3000) # Wait for 3 seconds for JS to execute
    browser.close()
