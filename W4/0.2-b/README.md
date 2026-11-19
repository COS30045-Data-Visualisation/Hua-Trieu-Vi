# Student Info
* **Name:** Hua Trieu Vi  
* **ID:** 106393243  
* **Course:** COS30045-Project demostration 1  

---

# ABOUT THE DATA

## DATA SOURCE
The dataset analyzed in this project originates from official Australian energy registration records (`tv_2026_02_15.csv`). It contains registered specifications for **4,508** television models available in Australia.

---

## 1. DATA PROCESSING
Raw data was cleaned, transformed, and aggregated using the **KNIME Analytics Platform** and **Python (Pandas)**. Registered TV models were categorized into three distinct size groups based on panel diagonal measurement:

* **Small:** (<= 43 inches) - 1,111 models
* **Medium:** (44 to 65 inches) - 2,059 models
* **Large:** (>= 66 inches) - 1,338 models

Key metrics such as annual energy consumption (kWh/year) were calculated via mean aggregation across each size class.

---

## 2. PRIVACY
The dataset consists strictly of publicly available appliance performance specifications, product energy ratings, and brand model metadata. No personal data, user telemetry, or personally identifiable information (PII) is included or processed.

---

## 3. ACCURACY AND LIMITATIONS
* **Accuracy:** Figures reflect official standardized testing metrics under Australian Energy Rating Label standards (assuming standard usage conditions).
* **Limitations:** Real-world household energy consumption may vary depending on individual usage hours, picture mode settings (e.g., SDR vs. HDR, backlight intensity), room lighting conditions, and standby configuration.

---

## 4. ETHICS
Data representation adheres to principles of transparency and fairness. Charts, tables, and narrative summaries are presented without bias to provide consumers with objective, data-backed insights regarding appliance energy efficiency.

---

# STORYBOARD NARRATIVE & STICKY NOTES

### 1. STICKY NOTE 1: ISSUE (THE SHOPPER'S DILEMMA)
* **Narrative Focus:** Highlighting choice overload and consumer misconception.
* **Content Summary:** Walk into any store and you are surrounded by giant 4K/8K displays. With 4,508 models registered in Australia, buyers are pressured to believe "bigger is always better," ignoring long-term energy consequences.

### 2. STICKY NOTE 2: DEMONSTRATE ISSUE (SKYROCKETING COSTS & DISCOMFORT)
* **Narrative Focus:** Uncovering the hidden drawbacks of oversized screens.
* **Content Summary:** Extra-large panels create real-world household issues: continuous power drain, unnecessary ambient heat generation, visual strain, and spatial clutter in standard living rooms.

### 3. STICKY NOTE 3: IDEAS FOR OVERCOMING ISSUE (THE COMPACT INITIATIVE)
* **Narrative Focus:** Shifting perspective toward right-sized screen selection.
* **Content Summary:** Evaluating a practical shift toward compact displays (<= 43") to balance modern entertainment quality with responsible electricity consumption.

### 4. STICKY NOTE 4: DESCRIBE PROGRAM (RIGHT-SIZING GUIDELINES)
* **Narrative Focus:** Defining practical energy guidelines for households.
* **Content Summary:** Compact screens (<= 43") average just 158.11 kWh/year, making them ideal for bedrooms, study areas, and apartments without inflating utility bills.

### 5. STICKY NOTE 5: DATA EVIDENCE (THE SHOCKING 4.7X ENERGY GAP)
* **Narrative Focus:** Presenting hard empirical evidence from official data.
* **Content Summary:** Data comparison shows Large screens (>= 66") consume 748.88 kWh/yearâ€”a massive 4.7x energy gap compared to Small screens (158.11 kWh/year), costing over $1,750 AUD extra in electricity over 10 years ($2,233.20 vs $471.50).

### 6. STICKY NOTE 6: RECOMMENDATION (THE SMART BUY)
* **Narrative Focus:** Actionable call to action for Australian consumers.
* **Content Summary:** Choose right-sized compact TVs to save up to 79% on screen electricity costs annually, enjoy optimal eye comfort, and maintain balanced living spaces.

---

# Generative AI Reflection

### 1. Tools Used:
* Generative AI tools (Gemini).

### 2. Usage & Application:
* **Structure & Layout:** Help generate HTML templates and modern CSS layouts tailored to energy efficiency storytelling. As well as construct the layout for this readme.md file.
* **Syntax & Debugging:** Resolved layout alignment issues, formatted HTML tables, and assisted in refining web page components.

### 3. Adaptations & Changes Made:
* Adjusted table columns and content to focus strictly on essential parameters (such as annual energy consumption in kWh/year).
* Modified text content and HTML tags to ensure full compatibility with existing stylesheet classes.

### 4. Key Takeaways & Learning:
* Learned how to effectively integrate data-driven insights into a digital storytelling framework (Storyboard approach).
* Gained hands-on experience in prompt engineering to quickly generate structured, responsive web layouts.

### 5. Limitations & Challenges Encountered:
* Initial responses included unnecessary columns and generic estimates; manual prompt adjustments were required to align the code directly with the specific dataset structure and guidelines.

### 6. Example promt:
* *"Generate responsive HTML and CSS code for a 4-card key metrics display section."*

---

# Project Structure
```text
.
â”œâ”€â”€ index.html                  # Home page: Market overview and summary highlights
â”œâ”€â”€ televisions.html            # Televisions page: 5-stage storytelling analysis
â”œâ”€â”€ about.html                  # About page: Methodology and course context
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ css/
â”‚   â”‚   â””â”€â”€ style.css           # Main stylesheet
â”‚   â””â”€â”€ img/
â”‚       â”œâ”€â”€ PowerIcon.png                # Site logo icon
â”‚       â”œâ”€â”€ PiechartBrand.png            # Brand market share chart
â”‚       â”œâ”€â”€ BarchartEnergy_new.png       # Energy consumption by size category chart
â”‚       â”œâ”€â”€ Barchartcategory.png         # Size category registed of TV chart
â”‚       â””â”€â”€ BarchartEnergy_tvty_small.png # Energy consumption by screen technology (Small category)
â”‚      
â””â”€â”€ README.md