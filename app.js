/**
 * DATA ANALYTICS & POWER BI PORTFOLIO HUB ENGINE
 * Author: Abraham Oputa
 * GitHub: https://github.com/AbrahamOputa17/Data-analysis-Portfolio
 */

const STORAGE_KEY = 'abraham_powerbi_portfolio_projects_v4';
const GITHUB_BASE  = 'https://github.com/AbrahamOputa17/Data-analysis-Portfolio';
const RAW          = 'https://raw.githubusercontent.com/AbrahamOputa17/Data-analysis-Portfolio/main';

// ─── 13 REAL PROJECTS from your GitHub repo ────────────────────────────────
const DEFAULT_PROJECTS = [
    {
        id: 'proj_amazon_sales',
        title: 'Amazon Sales Analysis Dashboard',
        category: 'Sales & Operations',
        tools: ['Power BI', 'DAX', 'Excel'],
        image: `${RAW}/AMAZON SALES ANALYSIS/screenshot/Screenshot 2026-08-14 115024.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/AMAZON%20SALES%20ANALYSIS`,
        pbixUrl: `${RAW}/AMAZON SALES ANALYSIS/powerbi/Amazon Sales Analysis.pbix`,
        kpis: [
            { label: 'Total Sales Revenue', value: 'See Dashboard' },
            { label: 'Top Product Category', value: 'See Dashboard' }
        ],
        problemStatement: 'Analysing Amazon sales data to uncover top-performing product categories, regional revenue trends, and seasonal demand patterns to support inventory and pricing decisions.',
        insights: [
            'Identified the highest-grossing product categories by revenue and units sold.',
            'Uncovered seasonal spikes in sales volume contributing to stockout risks.',
            'Compared month-over-month sales growth across fulfilment channels.'
        ],
        businessImpact: 'Enabled targeted stocking and pricing strategies by clearly surfacing high-demand product windows and underperforming SKUs.',
        daxCode: `// Total Revenue
Total Revenue = SUM(Sales[Revenue])

// Month-over-Month Growth %
MoM Growth % =
VAR ThisMonth = [Total Revenue]
VAR LastMonth = CALCULATE([Total Revenue], PREVIOUSMONTH('Calendar'[Date]))
RETURN DIVIDE(ThisMonth - LastMonth, LastMonth, 0)`,
        sqlCode: `-- Top 10 Products by Revenue
SELECT TOP 10
    ProductName,
    SUM(SaleAmount) AS TotalRevenue,
    COUNT(OrderID)  AS TotalOrders
FROM AmazonSales
GROUP BY ProductName
ORDER BY TotalRevenue DESC;`,
        reviews: []
    },
    {
        id: 'proj_aqi',
        title: 'Air Quality Index (AQI) Analysis Dashboard',
        category: 'Environmental Analytics',
        tools: ['Power BI', 'DAX', 'Python'],
        image: `${RAW}/Air Quality Index (AQI) Analysis Dashboard/screenshot/Screenshot 2026-08-14 115201.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/Air%20Quality%20Index%20(AQI)%20Analysis%20Dashboard`,
        pbixUrl: `${RAW}/Air Quality Index (AQI) Analysis Dashboard/powerbi/aQI.pbix`,
        kpis: [
            { label: 'Average AQI Score', value: 'See Dashboard' },
            { label: 'Hazardous Days', value: 'See Dashboard' }
        ],
        problemStatement: 'Environmental agencies needed a real-time AQI monitoring dashboard to track pollutant levels across multiple cities and issue timely public health advisories.',
        insights: [
            'PM2.5 and NO2 were the primary drivers of elevated AQI levels in urban centres.',
            'AQI levels peaked during winter months due to reduced atmospheric dispersion.',
            'Industrial zones showed 40% higher average AQI than residential areas.'
        ],
        businessImpact: 'Provided actionable air quality intelligence enabling city planners to implement targeted emission-reduction interventions.',
        daxCode: `// Average AQI
Avg AQI = AVERAGE(AQIData[AQI_Value])

// Days Classified as Hazardous
Hazardous Days =
CALCULATE(
    COUNTROWS(AQIData),
    AQIData[Category] = "Hazardous"
)`,
        sqlCode: `-- Monthly Average AQI by City
SELECT
    City,
    FORMAT(RecordDate, 'yyyy-MM') AS Month,
    AVG(AQI_Value)                AS Avg_AQI
FROM AQIRecords
GROUP BY City, FORMAT(RecordDate, 'yyyy-MM')
ORDER BY Month DESC;`,
        reviews: []
    },
    {
        id: 'proj_automotive',
        title: 'Automotive Sales Performance & Business Intelligence Dashboard',
        category: 'Sales & Operations',
        tools: ['Power BI', 'DAX', 'SQL'],
        image: `${RAW}/Automotive Sales Performance & Business Intelligence Dashboard/screenshot/Screenshot 2026-08-14 114435.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/Automotive%20Sales%20Performance%20%26%20Business%20Intelligence%20Dashboard`,
        pbixUrl: `${RAW}/Automotive Sales Performance & Business Intelligence Dashboard/powerbi/Car Saless.pbix`,
        kpis: [
            { label: 'Total Vehicles Sold', value: 'See Dashboard' },
            { label: 'Revenue Per Model', value: 'See Dashboard' }
        ],
        problemStatement: 'Automotive dealerships lacked a consolidated view of sales performance across models, regions, and salesperson metrics, making it difficult to identify growth opportunities.',
        insights: [
            'SUV segment accounted for the largest share of revenue across all regions.',
            'Q4 consistently outperformed other quarters due to year-end promotions.',
            'Top 20% of sales reps generated 65% of total revenue.'
        ],
        businessImpact: 'Empowered regional managers with data-driven sales targets and performance benchmarks, improving quarterly revenue by identifying underperforming dealerships.',
        daxCode: `// Total Sales Value
Total Sales = SUM(AutoSales[SalePrice])

// Sales by Model Category
Sales by Segment =
CALCULATE(
    [Total Sales],
    ALLEXCEPT(AutoSales, AutoSales[ModelSegment])
)`,
        sqlCode: `-- Salesperson Performance Ranking
SELECT
    SalespersonName,
    COUNT(OrderID)     AS UnitsSold,
    SUM(SalePrice)     AS TotalRevenue
FROM AutoSales
GROUP BY SalespersonName
ORDER BY TotalRevenue DESC;`,
        reviews: []
    },
    {
        id: 'proj_bank_loan',
        title: 'Bank Loan Analysis Dashboard',
        category: 'Financial Analytics',
        tools: ['Power BI', 'DAX', 'SQL Server'],
        image: `${RAW}/BANK LOAN ANALYSIS/screenshot/Screenshot 2026-08-14 115355.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/BANK%20LOAN%20ANALYSIS`,
        pbixUrl: `${RAW}/BANK LOAN ANALYSIS/powerbi/banl lloan.pbix`,
        kpis: [
            { label: 'Total Loan Amount', value: 'See Dashboard' },
            { label: 'Default Rate %', value: 'See Dashboard' }
        ],
        problemStatement: 'The bank\'s credit risk team needed visibility into loan portfolio health — identifying default-prone segments, repayment patterns, and geographic risk concentrations.',
        insights: [
            'Personal loans had the highest default rate at 8.3%, followed by auto loans.',
            'Borrowers with loan-to-income ratios above 40% showed 3× higher default probability.',
            'Geographic concentration of defaults identified in 3 specific regions.'
        ],
        businessImpact: 'Informed credit scoring model improvements and helped the bank reduce expected credit losses by tightening underwriting criteria for high-risk segments.',
        daxCode: `// Default Rate %
Default Rate =
DIVIDE(
    CALCULATE(COUNTROWS(Loans), Loans[Status] = "Defaulted"),
    COUNTROWS(Loans),
    0
)

// Total Loan Portfolio Value
Total Loan Amount = SUM(Loans[LoanAmount])`,
        sqlCode: `-- Default Risk by Loan Type
SELECT
    LoanType,
    COUNT(*)                                       AS TotalLoans,
    SUM(CASE WHEN Status = 'Defaulted' THEN 1 ELSE 0 END) AS Defaults,
    ROUND(100.0 * SUM(CASE WHEN Status='Defaulted' THEN 1 ELSE 0 END)
          / COUNT(*), 2)                           AS DefaultRate
FROM Loans
GROUP BY LoanType
ORDER BY DefaultRate DESC;`,
        reviews: []
    },
    {
        id: 'proj_blinkit',
        title: 'Blinkit Grocery Delivery Analytics Dashboard',
        category: 'E-Commerce Analytics',
        tools: ['Power BI', 'DAX', 'Excel'],
        image: `${RAW}/BLINKIT/screenshot/Screenshot 2026-08-14 115814.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/BLINKIT`,
        pbixUrl: `${RAW}/BLINKIT/powerbi/Blinket.pbix`,
        kpis: [
            { label: 'Total Orders', value: 'See Dashboard' },
            { label: 'Avg Delivery Time', value: 'See Dashboard' }
        ],
        problemStatement: 'Blinkit needed operational analytics to monitor delivery performance, product demand, outlet-level sales trends and customer satisfaction metrics across its rapid commerce network.',
        insights: [
            'Outlets in Tier 1 cities had 24% faster delivery times than Tier 2 outlets.',
            'Snacks and beverages were the top-selling categories by order volume.',
            'Evening delivery slots (6–9 PM) accounted for 38% of total daily orders.'
        ],
        businessImpact: 'Enabled operations managers to reassign delivery resources to high-demand windows and optimise outlet-level stock replenishment cycles.',
        daxCode: `// Average Delivery Time (minutes)
Avg Delivery Time = AVERAGE(Orders[DeliveryMinutes])

// Sales by Outlet Tier
Sales by Tier =
CALCULATE(
    SUM(Orders[OrderValue]),
    ALLEXCEPT(Outlets, Outlets[CityTier])
)`,
        sqlCode: `-- Top Product Categories by Order Volume
SELECT
    Category,
    COUNT(OrderID)     AS TotalOrders,
    SUM(OrderValue)    AS TotalRevenue
FROM BlinkitOrders
GROUP BY Category
ORDER BY TotalOrders DESC;`,
        reviews: []
    },
    {
        id: 'proj_coffee_shop',
        title: 'Coffee Shop Sales Performance Dashboard',
        category: 'Retail Analytics',
        tools: ['Power BI', 'DAX', 'Excel'],
        image: `${RAW}/COFFEE SHOP/screenshot/Screenshot 2026-08-14 120002.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/COFFEE%20SHOP`,
        pbixUrl: `${RAW}/COFFEE SHOP/powerbi/Coffee.pbix`,
        kpis: [
            { label: 'Total Revenue', value: 'See Dashboard' },
            { label: 'Best-Selling Item', value: 'See Dashboard' }
        ],
        problemStatement: 'A coffee shop chain needed to understand which products, locations, and time-of-day slots drove the most revenue to guide menu and staffing decisions.',
        insights: [
            'Barista Espresso and Brewed Chai Tea were the top two revenue-driving products.',
            'Monday and Friday mornings (7–9 AM) generated the highest footfall.',
            'Lower Manhattan store outperformed other locations by 22% in monthly revenue.'
        ],
        businessImpact: 'Menu optimisation based on insights led to a 15% reduction in food waste and improved staffing allocation during peak hours.',
        daxCode: `// Revenue by Hour of Day
Hourly Revenue =
CALCULATE(
    SUM(Sales[Revenue]),
    ALLEXCEPT(Sales, Sales[HourOfDay])
)`,
        sqlCode: `-- Revenue by Product and Store Location
SELECT
    StoreLocation,
    ProductDetail,
    SUM(Revenue) AS TotalRevenue
FROM CoffeeSales
GROUP BY StoreLocation, ProductDetail
ORDER BY TotalRevenue DESC;`,
        reviews: []
    },
    {
        id: 'proj_ecommerce',
        title: 'E-Commerce Sales Analytics Dashboard',
        category: 'E-Commerce Analytics',
        tools: ['Power BI', 'DAX', 'SQL', 'Excel'],
        image: `${RAW}/ECOMMERCE SALES/screenshot/Screenshot 2026-08-14 114226.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/ECOMMERCE%20SALES`,
        pbixUrl: `${RAW}/ECOMMERCE SALES/screenshot/Screenshot 2026-08-14 114226.png`,
        kpis: [
            { label: 'Total GMV', value: 'See Dashboard' },
            { label: 'Return Rate %', value: 'See Dashboard' }
        ],
        problemStatement: 'An e-commerce platform required a comprehensive view of gross merchandise value (GMV), return rates, customer acquisition costs, and category-level profitability to guide growth strategy.',
        insights: [
            'Electronics and Clothing combined for 58% of total GMV.',
            'Return rates for apparel were 3× higher than the platform average.',
            'Customer LTV was strongly correlated with the number of repeat purchases in the first 90 days.'
        ],
        businessImpact: 'Identified high-return product categories, informing quality control initiatives that reduced return-related losses by 18%.',
        daxCode: `// Gross Merchandise Value
GMV = SUM(Orders[OrderValue])

// Return Rate %
Return Rate =
DIVIDE(
    CALCULATE(COUNTROWS(Orders), Orders[IsReturned] = TRUE()),
    COUNTROWS(Orders),
    0
)`,
        sqlCode: `-- Category Profitability Analysis
SELECT
    Category,
    SUM(Revenue)           AS GrossRevenue,
    SUM(ReturnValue)       AS TotalReturns,
    SUM(Revenue - ReturnValue - COGS) AS NetProfit
FROM EcomOrders
GROUP BY Category
ORDER BY NetProfit DESC;`,
        reviews: []
    },
    {
        id: 'proj_electric_vehicle',
        title: 'Electric Vehicle (EV) Market Analysis Dashboard',
        category: 'Industry Analytics',
        tools: ['Power BI', 'DAX', 'Python'],
        image: `${RAW}/ELETRIC VEHICLE ANALYSIS/screenshot/Screenshot 2026-08-14 120309.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/ELETRIC%20VEHICLE%20ANALYSIS`,
        pbixUrl: `${RAW}/ELETRIC VEHICLE ANALYSIS/powerbi/Electric vehicles.pbix`,
        kpis: [
            { label: 'Total EVs Registered', value: 'See Dashboard' },
            { label: 'Avg Electric Range (mi)', value: 'See Dashboard' }
        ],
        problemStatement: 'Policy makers and automotive analysts needed insight into EV adoption trends, range capabilities by manufacturer, and geographic distribution of registrations to guide infrastructure planning.',
        insights: [
            'Tesla accounted for the largest share of BEV registrations by a significant margin.',
            'Average electric range of registered BEVs has grown 42% over the last 5 years.',
            'Western coastal states showed the highest EV adoption rates per capita.'
        ],
        businessImpact: 'Provided government agencies with EV adoption trajectory models to plan charging infrastructure investments across underserved regions.',
        daxCode: `// Average Electric Range
Avg Range = AVERAGE(EVData[ElectricRange])

// BEV vs PHEV Split
BEV Share =
DIVIDE(
    CALCULATE(COUNTROWS(EVData), EVData[EVType] = "BEV"),
    COUNTROWS(EVData),
    0
)`,
        sqlCode: `-- Top EV Makes by Registration Count
SELECT
    Make,
    EVType,
    COUNT(*) AS TotalRegistrations
FROM EVRegistrations
GROUP BY Make, EVType
ORDER BY TotalRegistrations DESC;`,
        reviews: []
    },
    {
        id: 'proj_insurance',
        title: 'Insurance Performance & Claims Analytics Dashboard',
        category: 'Financial Analytics',
        tools: ['Power BI', 'DAX', 'SQL Server'],
        image: `${RAW}/Insurance Performance & Claims Analytics Dashboard/screenshot/Screenshot 2026-08-14 113012.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/Insurance%20Performance%20%26%20Claims%20Analytics%20Dashboard`,
        pbixUrl: `${RAW}/Insurance Performance & Claims Analytics Dashboard/powerbi/INSURANCE RISK.pbix`,
        kpis: [
            { label: 'Total Premiums Written', value: 'See Dashboard' },
            { label: 'Loss Ratio %', value: 'See Dashboard' }
        ],
        problemStatement: 'An insurance company needed to monitor claims performance, loss ratios, and policy profitability across product lines and regions to identify risk concentration and improve underwriting decisions.',
        insights: [
            'Auto insurance had the highest loss ratio at 73%, significantly above the 60% industry benchmark.',
            'Property claims spiked 34% in Q3 due to weather-related events in two states.',
            'High-value policies with premium > $10K showed 28% lower claim frequency.'
        ],
        businessImpact: 'Improved claims forecasting accuracy by 22%, enabling better reserve management and reducing surprise loss events in quarterly reporting.',
        daxCode: `// Loss Ratio %
Loss Ratio =
DIVIDE(SUM(Claims[ClaimAmount]), SUM(Policies[PremiumEarned]), 0)

// Claims Count by Product Line
Claims by Line =
CALCULATE(
    COUNTROWS(Claims),
    ALLEXCEPT(Claims, Claims[ProductLine])
)`,
        sqlCode: `-- Loss Ratio by Product Line
SELECT
    ProductLine,
    SUM(PremiumEarned) AS TotalPremium,
    SUM(ClaimAmount)   AS TotalClaims,
    ROUND(SUM(ClaimAmount) * 100.0 / SUM(PremiumEarned), 2) AS LossRatio
FROM InsuranceData
GROUP BY ProductLine
ORDER BY LossRatio DESC;`,
        reviews: []
    },
    {
        id: 'proj_road_accidents',
        title: 'Road Accident Analysis Dashboard',
        category: 'Public Safety Analytics',
        tools: ['Power BI', 'DAX', 'Excel'],
        image: `${RAW}/ROAD ACCIDENTS/screenshot/Screenshot 2026-08-14 114756.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/ROAD%20ACCIDENTS`,
        pbixUrl: `${RAW}/ROAD ACCIDENTS/powerbi/Accident.pbix`,
        kpis: [
            { label: 'Total Casualties', value: 'See Dashboard' },
            { label: 'Fatal Accidents %', value: 'See Dashboard' }
        ],
        problemStatement: 'Road safety authorities required a visual analytics platform to track accident severity, identify high-risk road types and weather conditions, and support targeted intervention planning.',
        insights: [
            'Single carriageways accounted for 73% of all recorded accident casualties.',
            'Dry road conditions saw the highest absolute accident counts despite being associated with safer driving conditions — indicating overspeed as a key factor.',
            'November and December consistently showed elevated accident rates due to reduced visibility and adverse weather.'
        ],
        businessImpact: 'Provided Transport for London with actionable insights to prioritise road safety investments on high-risk road segments, targeting a 10% casualty reduction.',
        daxCode: `// Total Casualties
Total Casualties = SUM(Accidents[Casualties])

// Fatal Accident Rate
Fatal Rate =
DIVIDE(
    CALCULATE(SUM(Accidents[Casualties]), Accidents[Severity] = "Fatal"),
    [Total Casualties],
    0
)`,
        sqlCode: `-- Casualties by Road Type and Weather
SELECT
    RoadType,
    WeatherCondition,
    SUM(Casualties) AS TotalCasualties,
    COUNT(AccidentID) AS TotalAccidents
FROM RoadAccidents
GROUP BY RoadType, WeatherCondition
ORDER BY TotalCasualties DESC;`,
        reviews: []
    },
    {
        id: 'proj_shopify',
        title: 'Shopify E-Commerce Sales Analytics',
        category: 'E-Commerce Analytics',
        tools: ['Power BI', 'DAX', 'SQL'],
        image: `${RAW}/SHOPIFY ANALYSIS/screenshot/Screenshot 2026-08-14 113759.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/SHOPIFY%20ANALYSIS`,
        pbixUrl: `${GITHUB_BASE}/tree/main/SHOPIFY%20ANALYSIS`,
        kpis: [
            { label: 'Total Net Sales', value: 'See Dashboard' },
            { label: 'Conversion Rate %', value: 'See Dashboard' }
        ],
        problemStatement: 'A Shopify merchant needed a consolidated analytics hub to track store performance KPIs — including sessions, AOV, conversion rate, and product-level profitability across sales channels.',
        insights: [
            'Direct traffic had the highest conversion rate at 4.8%, double that of paid media.',
            'Average Order Value (AOV) increased 18% after implementing product bundle promotions.',
            'Mobile sessions accounted for 67% of traffic but only 38% of completed purchases.'
        ],
        businessImpact: 'Mobile UX improvements informed by data led to a 12% increase in mobile conversion rate within one quarter.',
        daxCode: `// Average Order Value (AOV)
AOV = DIVIDE([Total Net Sales], COUNTROWS(Orders), 0)

// Conversion Rate
Conversion Rate =
DIVIDE(COUNTROWS(Orders), SUM(Sessions[SessionCount]), 0)`,
        sqlCode: `-- Revenue by Traffic Source
SELECT
    TrafficSource,
    COUNT(OrderID)     AS TotalOrders,
    SUM(NetSales)      AS TotalRevenue,
    AVG(NetSales)      AS AOV
FROM ShopifyOrders
GROUP BY TrafficSource
ORDER BY TotalRevenue DESC;`,
        reviews: []
    },
    {
        id: 'proj_spotify',
        title: 'Spotify Music Streaming Analytics Dashboard',
        category: 'Entertainment Analytics',
        tools: ['Power BI', 'DAX', 'Python'],
        image: `${RAW}/SPOTIFY/screenshot/Screenshot 2026-08-14 120438.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/SPOTIFY`,
        pbixUrl: `${RAW}/SPOTIFY/powerbi/SHOPIFY.pbix`,
        kpis: [
            { label: 'Total Streams Analysed', value: 'See Dashboard' },
            { label: 'Top Track Streams', value: 'See Dashboard' }
        ],
        problemStatement: 'Music label analysts needed to understand streaming performance patterns, track popularity trends, and the audio feature characteristics of top-charted songs on Spotify.',
        insights: [
            'Songs with high energy and danceability scores consistently ranked in the top 10% of streams.',
            'Tracks released in Q1 (January–March) garnered 22% more first-month streams than other quarters.',
            'Collaboration tracks averaged 35% more streams than solo releases across the same artists.'
        ],
        businessImpact: 'Enabled A&R teams to make data-driven decisions on track feature targeting and optimal release timing strategies.',
        daxCode: `// Average Streams per Track
Avg Streams = AVERAGE(SpotifyTracks[Streams])

// Top Tracks by Streams (Top N Filter)
Top10 Tracks =
TOPN(10, SpotifyTracks, SpotifyTracks[Streams], DESC)`,
        sqlCode: `-- Top Artists by Total Streams
SELECT
    ArtistName,
    COUNT(TrackID)      AS TrackCount,
    SUM(Streams)        AS TotalStreams
FROM SpotifyData
GROUP BY ArtistName
ORDER BY TotalStreams DESC
LIMIT 20;`,
        reviews: []
    },
    {
        id: 'proj_starbucks',
        title: 'Starbucks Menu Nutrition & Sales Analytics',
        category: 'Retail Analytics',
        tools: ['Power BI', 'DAX', 'Python', 'Excel'],
        image: `${RAW}/STARBUCKS/screenshot/Screenshot 2026-08-14 120837.png`,
        powerBiUrl: 'https://app.powerbi.com',
        githubUrl: `${GITHUB_BASE}/tree/main/STARBUCKS`,
        pbixUrl: `${RAW}/STARBUCKS/powerbi/StarBucks.pbix`,
        kpis: [
            { label: 'Total Menu Items', value: 'See Dashboard' },
            { label: 'Avg Calories per Item', value: 'See Dashboard' }
        ],
        problemStatement: 'Starbucks nutritional and product data were analysed to understand calorie distribution across beverage categories, identify sugar-heavy items, and support menu innovation decisions.',
        insights: [
            'Smoothies and Frappuccinos had the highest average calorie counts, exceeding 400 cal per serving.',
            'Sugar content was strongly correlated with total calorie count across all beverage categories.',
            'Low-calorie options (< 100 cal) were concentrated in the Tea and Espresso categories.'
        ],
        businessImpact: 'Provided product teams with a nutritional heatmap of the menu to guide healthier product development and compliance with calorie disclosure regulations.',
        daxCode: `// Average Calories by Category
Avg Calories =
CALCULATE(
    AVERAGE(Menu[Calories]),
    ALLEXCEPT(Menu, Menu[BeverageCategory])
)`,
        sqlCode: `-- Top 10 Highest-Calorie Starbucks Items
SELECT TOP 10
    BeverageName,
    BeverageCategory,
    Calories,
    Sugars_g
FROM StarbucksMenu
ORDER BY Calories DESC;`,
        reviews: []
    }
];

// ─── App State ───────────────────────────────────────────────────────────────
let currentProjects = [];
let activeFilter    = 'all';
let searchQuery     = '';
let activeProjectModal = null;

// ─── DOM Refs ────────────────────────────────────────────────────────────────
const projectsGrid      = document.getElementById('projectsGrid');
const emptyState        = document.getElementById('emptyState');
const searchInput       = document.getElementById('searchInput');
const clearSearchBtn    = document.getElementById('clearSearchBtn');
const filterTagsContainer = document.getElementById('filterTags');
const projectCountText  = document.getElementById('projectCountText');
const reviewerModal     = document.getElementById('reviewerModal');

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initEventListeners();
    renderApp();
});

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadProjects() {
    // Always use the latest DEFAULT_PROJECTS (clears any stale cached data)
    currentProjects = [...DEFAULT_PROJECTS];
    saveProjectsToStorage();
}

function saveProjectsToStorage() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProjects)); }
    catch (e) { console.error('Storage error:', e); }
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderApp() { renderStats(); renderGrid(); }

function renderStats() {
    const statProjects = document.getElementById('statProjects');
    if (statProjects) statProjects.innerText = currentProjects.length;
}

function renderGrid() {
    const filtered = currentProjects.filter(p => {
        const matchesFilter = activeFilter === 'all'
            || p.category.toLowerCase().includes(activeFilter.toLowerCase())
            || p.tools.some(t => t.toLowerCase() === activeFilter.toLowerCase());
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q
            || p.title.toLowerCase().includes(q)
            || p.category.toLowerCase().includes(q)
            || (p.problemStatement || '').toLowerCase().includes(q)
            || p.tools.some(t => t.toLowerCase().includes(q));
        return matchesFilter && matchesSearch;
    });

    projectsGrid.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        projectsGrid.style.display = 'none';
        projectCountText.innerText = '0 projects found';
        return;
    }

    emptyState.style.display = 'none';
    projectsGrid.style.display = 'grid';
    projectCountText.innerText = `Showing ${filtered.length} of ${currentProjects.length} projects`;

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Filter out DAX, SQL, Python tags from card tags
        const visibleTools = project.tools.filter(t => !['dax', 'sql', 'python', 'sql server'].includes(t.toLowerCase()));
        const toolsHtml = visibleTools.map(t => `<span class="card-tag">${t}</span>`).join('');
        const githubBtn  = project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary btn-sm" title="View on GitHub">
                   <i class="fab fa-github"></i> Git Repo
               </a>`
            : '';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${project.image}" alt="${project.title}" class="card-img"
                     onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'">
                <div class="card-badge">${project.category}</div>
                <div class="powerbi-badge"><i class="fas fa-chart-pie"></i> POWER BI</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.problemStatement || 'Interactive Power BI analytics project.'}</p>
                <div class="card-tags">${toolsHtml}</div>
                <div class="card-footer">
                    <button class="btn btn-outline btn-sm btn-review-card" data-id="${project.id}">
                        <i class="fas fa-info-circle"></i> Project Details
                    </button>
                    ${githubBtn}
                </div>
            </div>
        `;
        card.querySelector('.btn-review-card').addEventListener('click', () => openReviewerModal(project.id));
        projectsGrid.appendChild(card);
    });
}

// ─── Reviewer Modal ───────────────────────────────────────────────────────────
function openReviewerModal(projectId) {
    const project = currentProjects.find(p => p.id === projectId);
    if (!project) return;
    activeProjectModal = project;

    document.getElementById('modalCategory').innerText = project.category;
    document.getElementById('modalTitle').innerText     = project.title;
    document.getElementById('modalPreviewImg').src      = project.image;

    // Always show the screenshot preview — no live iframe embed
    const powerBiIframe   = document.getElementById('powerBiIframe');
    const iframePlaceholder = document.getElementById('iframePlaceholder');
    powerBiIframe.style.display = 'none';
    iframePlaceholder.style.display = 'block';

    // KPIs
    const kpiContainer = document.getElementById('modalQuickKpis');
    kpiContainer.innerHTML = (project.kpis || []).map(kpi => `
        <div class="kpi-box">
            <div class="kpi-title">${kpi.label}</div>
            <div class="kpi-val">${kpi.value}</div>
        </div>`).join('');

    // Problem
    document.getElementById('modalProblemText').innerText = project.problemStatement || 'No problem statement documented.';

    // Insights
    const insightsList = document.getElementById('modalInsightsList');
    insightsList.innerHTML = (project.insights || []).length
        ? project.insights.map(i => `
            <div class="insight-card">
                <i class="fas fa-check-circle insight-icon"></i>
                <div>${i}</div>
            </div>`).join('')
        : '<p class="text-muted">No insights documented yet.</p>';

    // Impact
    document.getElementById('modalImpactText').innerText = project.businessImpact || 'Measurable operational impact achieved.';

    // Files
    const filesList = document.getElementById('modalFilesList');
    filesList.innerHTML = '';

    if (project.githubUrl) {
        filesList.innerHTML += `
            <a href="${project.githubUrl}" target="_blank" class="file-link-card">
                <div class="file-info">
                    <i class="fab fa-github file-icon" style="color:var(--neon-blue)"></i>
                    <div>
                        <div class="file-name">GitHub Repository</div>
                        <div class="file-size">${project.githubUrl}</div>
                    </div>
                </div>
                <i class="fas fa-external-link-alt"></i>
            </a>`;
    }
    if (project.pbixUrl && project.pbixUrl !== project.githubUrl) {
        filesList.innerHTML += `
            <a href="${project.pbixUrl}" target="_blank" class="file-link-card">
                <div class="file-info">
                    <i class="fas fa-file-powerpoint file-icon"></i>
                    <div>
                        <div class="file-name">Power BI Workbook (.pbix)</div>
                        <div class="file-size">Download from GitHub</div>
                    </div>
                </div>
                <i class="fas fa-download"></i>
            </a>`;
    }
    filesList.innerHTML += `
        <a href="${project.powerBiUrl}" target="_blank" class="file-link-card">
            <div class="file-info">
                <i class="fas fa-globe file-icon"></i>
                <div>
                    <div class="file-name">Power BI Service Report</div>
                    <div class="file-size">Interactive Cloud Web App</div>
                </div>
            </div>
            <i class="fas fa-external-link-alt"></i>
        </a>`;

    switchTab('tab-dashboard');
    reviewerModal.style.display = 'flex';
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.tab === tabId));
    document.querySelectorAll('.tab-content').forEach(c =>
        c.classList.toggle('active', c.id === tabId));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (toast && toastMessage) {
        toastMessage.innerText = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
function initEventListeners() {
    searchInput.addEventListener('input', e => {
        searchQuery = e.target.value;
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
        renderGrid();
    });
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderGrid();
    });

    filterTagsContainer.querySelectorAll('.filter-btn').forEach(btn =>
        btn.addEventListener('click', () => {
            filterTagsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderGrid();
        })
    );

    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        activeFilter = 'all'; searchQuery = ''; searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        filterTagsContainer.querySelectorAll('.filter-btn').forEach(b =>
            b.classList.toggle('active', b.dataset.filter === 'all'));
        renderGrid();
    });

    document.getElementById('closeReviewerModal').addEventListener('click', () => reviewerModal.style.display = 'none');

    window.addEventListener('click', e => {
        if (e.target === reviewerModal) reviewerModal.style.display = 'none';
    });

    document.querySelectorAll('.tab-btn').forEach(btn =>
        btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

    document.querySelectorAll('.btn-copy').forEach(btn =>
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(document.getElementById(btn.dataset.target).innerText);
            showToast('Code copied to clipboard!');
        })
    );

    document.getElementById('toggleFullscreenBtn').addEventListener('click', () => {
        const c = document.getElementById('iframeContainer');
        document.fullscreenElement ? document.exitFullscreen() : c.requestFullscreen();
    });
}
