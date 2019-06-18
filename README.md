# project-1

## Overview

This repository is a group project for our coding boot camp. This is our first group project so the main purpose of this project is using github, slack, and other project management tools. We are combining two apis for a unique user experience.

## Tech Used

- html
- css
- materialize ui
- javascript
- jquery
- strains api
- love calculator api
- github

### Love Calculator API Body Response Structure

4 items

```
{
"fname":"John"
"sname":"Alice"
"percentage":"46"
"result":"Can choose someone better."
}
```

### Strains API Body Response is Structured

total number of strains = 2162

```

{
    "Afpak": {
        "id": 1,
        "race": "hybrid",
        "flavors": [
            "Earthy",
            "Chemical",
            "Pine"
        ],
        "effects": {
            "positive": [
                "Relaxed",
                "Hungry",
                "Happy",
                "Sleepy"
            ],
            "negative": [
                "Dizzy"
            ],
            "medical": [
                "Depression",
                "Insomnia",
                "Pain",
                "Stress",
                "Lack of Appetite"
            ]
        }
    },

    "African": {
        "id": 2,
        "race": "sativa",
        "flavors": [
            "Spicy/Herbal",
            "Pungent",
            "Earthy"
        ],
        "effects": {
            "positive": [
                "Euphoric",
                "Happy",
                "Creative",
                "Energetic",
                "Talkative"
            ],
            "negative": [
                "Dry Mouth"
            ],
            "medical": [
                "Depression",
                "Pain",
                "Stress",
                "Lack of Appetite",
                "Nausea",
                "Headache"
            ]
        }
    },
}

```

## Motivation

- Illinois approved recreational marijuana for January 1, 2020

- There are so many strains and we want to make them more familiar

## The Design Process

- User enters his/her name

-A list of randomly selected strain will be pre-populated into Strain Name field, along with Race, Flavors, Positive Effects

-When both name fields have been entered, user clicks Calculate Match button.

- Results will display compatibility

## Possible Future Updates

- Find API for government authorities (fed, state, local) with business licenses to find marijuana related businesses. From there filter down for commercial sales/recreational, medical dispensaries, growing operations, etc

- Recommend pairings based on chose strain/results from questionnaire or photo recognition
