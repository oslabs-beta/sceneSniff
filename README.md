![github logo](https://user-images.githubusercontent.com/95299573/188288457-eec04a56-3e5c-4f61-a344-14761d2aefe4.png)
# sceneSniff
An intuitive and dynamic Chrome Dev Tool Extension for Three.js debugging


sceneSniff is an in browser developer tool for Three.js projects. When accessing the Chrome Dev Tools window, open up sceneSniff to allow for real time adjustments and rendering of 3D objects within the scene of your browser window.



## Getting Started
1) Clone this repo to your local machine.
2) Visit chrome://extensions/ in your Chrome browser.
3) Toggle 'Developer mode' in the top right hand corner.
4) Click 'Load unpacked' in the top left hand corner.
5) Navigate to the sceneSniff directory and select the 'dist' folder.
6) Ensure that you have the toggle set to on.

### How to Use
1) Open your Three.js project in the browser.
2) Open the Inspect/Chrome Developer Tools window and select the '>>' in the navigation bar to open the dropdown menu.
3) Select 'sceneSniff' from the dropdown menu.

#### Once the tool is open:
1) Hit refresh on the current tab to refresh the browser window.
2) Select 'Load Scene' in the top left corner of the dev tool window.

Now, by selecting the different Mesh objects that appear underneath the 'Scene' dropdown, you can live adjust the scale, positioning, and rotation of the objects within your scene.

https://user-images.githubusercontent.com/95299573/188988200-7f8462d0-3d1c-41dd-a498-cf6db646048f.mp4

## Data Flow
If you're interested in how everything is connected, feel free to work your way through these data flow charts.
One is a broad overview while the other takes you through a more step by step approach on how data is moving.

![datasimple](https://user-images.githubusercontent.com/95299573/188335951-58a7c27a-4087-4dbc-af54-8314c95b4feb.png)
![Data flow](https://user-images.githubusercontent.com/95299573/188335906-5abf718b-d288-48eb-9b37-96a32d08523a.png)

## Become a Contributer
sceneSniff is looking to build out more features. If you would like to have a hand in the further expansion of sceneSniff, please clone this repo and [connect with the team](https://www.linkedin.com/company/scenesniff/) on what you would like to add to the tool.

- Some features we are looking to implement are, but not limited to:

  - Ability to change color and material of mesh objects.
  - Ability to capture light objects within the scene and adjust their attributes.
  - Ability to capture the camera within the scene and adjust its attributes.
  - A snapshot feature that would cache rendered frames to enhance debugging capabilities.


### Commit Messages
- For working branch commits a single line message is sufficient

- For PR commits please add a longer description of the changes
- Please author single line commit messages and PR commit titles to:

  - Start with capital letter
  - Have no trailing punctuation
  - Use imperative and present tense
  - Describe the outcome, not the process
  - Be less than 50 characters in length

### Pull Requests
- Development should be performed on branches from dev and PR'd back to dev once complete,
- Releases will be performed by PRing to main.

### Branch Names
- Use a new branch for each new feature and eventual PR
- Use the format of "type/descriptive-outcome"
- Types include:
  - bugfix
  - feature
  - docs
  - testing
  - refactor
The descriptive-outcome should describe what will be achieved by merging the branch

Happy debugging!
