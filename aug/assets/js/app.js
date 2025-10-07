// Configuration arrays for roles
const rolesUK = [
    "Mid-senior Accounting Assistant",
    "Part Qualified/Junior Accountant"
];

const rolesUS = [
    "Mid Senior Accounting Assistant",
    "Staff Accountant (GL/ Industry)",
    "Senior Accountant (Mid Sized CPA Firm)"
];

let currencySymbol; // Declare currencySymbol globally

// Table labels for different countries
const tableLabelsUK = [
    "Base Salary",
    "Total CTC With NIC, Pension, Other",
    "Other Costs",
    "Year 1 Cost (including one time cost)",
    "Monthly Cost"
];

const usSubLabels = [
    "Federal Unemployment (FUTA - 0.6%)",
    "State Unemployment (SUTA - Avg 3%)",
    "Workers' Compensation (0.5%)",
    "FICA Taxes (7.65%)"
];

const usBenefitsSubLabels = [
    "Technology and Equipment",
    "Health Insurance",
    "Retirement Plan Match (3%)",
    "Other Benefits"
];

const usOtherCostsSubLabels = [
    "HR and Administrative",
    "Office-Related",
    "Other Expenses"
];

// Helper to format currency values
const formatCurrency = (value) => {
    return currencySymbol + ' ' + value.toLocaleString(undefined, {maximumFractionDigits: 0});
};

const tableLabelsUS = [
    "Base Salary",
    ...usSubLabels,
    "Taxes",
    ...usBenefitsSubLabels,
    "Benefits",
    ...usOtherCostsSubLabels,
    "Other Costs",
    "One time recruitment cost (15%)",
    "Year 1 Cost (including one time cost)",
    "Year 2 Cost (3% inflation)",
    "Year 3 Cost (3% Inflation)",
    "Total 3 Year Cost"
];

// Sample data arrays - these can be easily updated with real values
// Structure: [role][country][column][row]
const tableData = {
    "Mid-senior Accounting Assistant": {
        uk: {
            column2: ["£0", "£0", "£0", "£0", "£0"],
            column3: ["£0", "£0", "£0", "£0", "£0"],
            column4: ["£0", "£0", "£0", "£0", "£0"]
        }
    },
    "Part Qualified/Junior Accountant": {
        uk: {
            column2: ["£0", "£0", "£0", "£0", "£0"],
            column3: ["£0", "£0", "£0", "£0", "£0"],
            column4: ["£0", "£0", "£0", "£0", "£0"]
        }
    },
    "Mid Senior Accounting Assistant": {
        us: {
            column2: [
                "$ 45,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 1,350", // Retirement Plan Match (Static)
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200",   // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000",   // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column3: [
                "$ 55,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 1,650", // Retirement Plan Match (Static)
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200", // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000", // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column4: [
                "$ 48,000", // Base Salary
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" // All calculated/empty for Augmentum
            ]
        }
    },
    "Staff Accountant (GL/ Industry)": {
        us: {
            column2: [
                "$ 55,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 1,650", // Retirement Plan Match (Static)
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200", // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000",   // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column3: [
                "$ 70,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 2,100", // Retirement Plan Match (Static)
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200", // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000", // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column4: [
                "$ 60,000", // Base Salary
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" // All calculated/empty for Augmentum
            ]
        }
    },
    "Senior Accountant (Mid Sized CPA Firm)": {
        us: {
            column2: [
                "$ 80,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 2,400", // Retirement Plan Match (Static) - 3% of $80,000
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200", // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000",   // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column3: [
                "$ 100,000", // Base Salary
                "",   // Federal Unemployment (Calculated)
                "", // State Unemployment (Calculated)
                "",   // Workers' Compensation (Calculated)
                "", // FICA Taxes (Calculated)
                "", // Taxes (Calculated)
                "$ 2,500", // Technology and equipment (Static)
                "$ 8,000", // Health Insurance (Static)
                "$ 3,000", // Retirement Plan Match (Static) - 3% of $100,000
                "$ 1,000",   // Other Benefits (Static)
                "",      // Benefits (Calculated)
                "$ 1,200", // HR and Administrative (Static)
                "$ 2,500", // Office-related (Static)
                "$ 1,000", // Other expenses (Static)
                "", // Other Costs (Calculated)
                "",        // One time recruitment cost (Calculated)
                "",   // Year 1 Cost (Calculated)
                "",   // Year 2 Cost (Calculated)
                "",   // Year 3 Cost (Calculated)
                ""    // Total 3 Year Cost (Calculated)
            ],
            column4: [
                "$ 72,000", // Base Salary
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" // All calculated/empty for Augmentum
            ]
        }
    }
};

const countrySelect = document.getElementById('country-select');
const roleContainer = document.getElementById('role-container');
const roleSelect = document.getElementById('role-select');
const tableContainer = document.getElementById('table-container');
const roiTable = document.getElementById('roi-table');

// Restore selections from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
    loadStateFromUrl(); // Load state from URL first
});

countrySelect.addEventListener('change', function() {
    // Save country selection
    localStorage.setItem('selectedCountry', countrySelect.value);
    // Reset role dropdown
    roleSelect.innerHTML = '';
    roleSelect.appendChild(new Option('Select a role', '', true, true));
    roleSelect.options[0].disabled = true;

    // Show role container
    roleContainer.style.display = 'block';
    
    // Hide table
    tableContainer.style.display = 'none';

    // Populate roles based on country
    let roles = [];
    if (countrySelect.value === 'uk') {
        roles = rolesUK;
    } else if (countrySelect.value === 'us') {
        roles = rolesUS;
    }
    roles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        roleSelect.appendChild(option);
    });

    // Reset role selection
    roleSelect.selectedIndex = 0;

    // Update URL after country change
    updateUrlParams();
});

roleSelect.addEventListener('change', function() {
    // Save role selection
    localStorage.setItem('selectedRole', roleSelect.value);
    if (roleSelect.value) {
        displayTable();
    } else {
        tableContainer.style.display = 'none';
    }
    // Update URL after role change
    updateUrlParams();
});

// Hide role dropdown if country is reset
countrySelect.addEventListener('input', function() {
    if (!countrySelect.value) {
        roleContainer.style.display = 'none';
        tableContainer.style.display = 'none';
        roleSelect.innerHTML = '';
    }
});

function getCollapseStateKey(country, role) {
    return `collapseState_${country}_${role}`;
}

function saveCollapseState(country, role, state) {
    localStorage.setItem(getCollapseStateKey(country, role), JSON.stringify(state));
}

function loadCollapseState(country, role) {
    const state = localStorage.getItem(getCollapseStateKey(country, role));
    return state ? JSON.parse(state) : { Taxes: false, Benefits: false, "Other Costs": false };
}

// Function to update URL parameters based on current state
function updateUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const selectedCountry = countrySelect.value;
    const selectedRole = roleSelect.value;
    const collapseState = loadCollapseState(selectedCountry, selectedRole); // Get the current collapse state

    params.set('country', selectedCountry);
    params.set('role', selectedRole);
    params.set('taxesCollapsed', collapseState.Taxes);
    params.set('benefitsCollapsed', collapseState.Benefits);
    params.set('otherCostsCollapsed', collapseState["Other Costs"]);

    history.pushState(null, '', `?${params.toString()}`);
}

// Function to load state from URL parameters
function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const urlCountry = params.get('country');
    const urlRole = params.get('role');
    const urlTaxesCollapsed = params.get('taxesCollapsed');
    const urlBenefitsCollapsed = params.get('benefitsCollapsed');
    const urlOtherCostsCollapsed = params.get('otherCostsCollapsed');

    let countryToLoad = localStorage.getItem('selectedCountry');
    let roleToLoad = localStorage.getItem('selectedRole');
    let collapseStateToLoad = {};

    if (urlCountry && urlRole) {
        countryToLoad = urlCountry;
        roleToLoad = urlRole;

        // Set collapse state from URL, defaulting to false if not present
        collapseStateToLoad = {
            Taxes: urlTaxesCollapsed === 'true',
            Benefits: urlBenefitsCollapsed === 'true',
            "Other Costs": urlOtherCostsCollapsed === 'true'
        };
        saveCollapseState(countryToLoad, roleToLoad, collapseStateToLoad); // Save URL state to localStorage
    } else {
        // If no URL params, load from localStorage
        collapseStateToLoad = loadCollapseState(countryToLoad, roleToLoad);
    }
    
    if (countryToLoad) {
        countrySelect.value = countryToLoad;
        countrySelect.dispatchEvent(new Event('change'));
        if (roleToLoad) {
            setTimeout(() => {
                roleSelect.value = roleToLoad;
                roleSelect.dispatchEvent(new Event('change'));
            }, 0);
        }
    }
}

function displayTable() {
    const selectedCountry = countrySelect.value;
    const selectedRole = roleSelect.value;
    const countryName = selectedCountry === 'uk' ? 'United Kingdom' : 'United States';
    currencySymbol = selectedCountry === 'uk' ? '£' : '$';
    
    // Get appropriate labels
    const labels = selectedCountry === 'uk' ? tableLabelsUK : tableLabelsUS;
    
    // Get data for the selected role and country
    const data = tableData[selectedRole][selectedCountry];
    
    // Clear existing table
    roiTable.innerHTML = '';
    
    // Create header row
    const headerRow = document.createElement('tr');
    headerRow.classList.add('main-header-row');
    
    // First column header (empty)
    const emptyHeader = document.createElement('th');
    emptyHeader.textContent = '';
    headerRow.appendChild(emptyHeader);
    
    // Second and third column headers (merged)
    const mergedHeader = document.createElement('th');
    mergedHeader.textContent = countryName;
    mergedHeader.colSpan = 2; // Span across 'Lower' and 'Upper'
    mergedHeader.classList.add('country-header');
    headerRow.appendChild(mergedHeader);
    
    // Fourth column header
    const augmentumHeader = document.createElement('th');
    augmentumHeader.textContent = 'Augmentum';
    headerRow.appendChild(augmentumHeader);
    
    roiTable.appendChild(headerRow);

    // Create sub-header row for 'Lower' and 'Upper'
    const subHeaderRow = document.createElement('tr');

    // Empty cell for the first column
    const emptySubHeader1 = document.createElement('th');
    emptySubHeader1.textContent = '';
    subHeaderRow.appendChild(emptySubHeader1);

    // 'Lower' header
    const lowerHeader = document.createElement('th');
    lowerHeader.textContent = 'Lower';
    lowerHeader.classList.add('sub-header-value');
    subHeaderRow.appendChild(lowerHeader);

    // 'Upper' header
    const upperHeader = document.createElement('th');
    upperHeader.textContent = 'Upper';
    upperHeader.classList.add('sub-header-value');
    subHeaderRow.appendChild(upperHeader);

    // Empty cell for Augmentum column
    const emptySubHeader2 = document.createElement('th');
    emptySubHeader2.textContent = '';
    subHeaderRow.appendChild(emptySubHeader2);

    roiTable.appendChild(subHeaderRow);
    
    // Get indices for calculations
    let taxesIndex = -1;
    let benefitsIndex = -1;
    let otherCostsIndex = -1;
    if (selectedCountry === 'us') {
        taxesIndex = labels.indexOf('Taxes');
        benefitsIndex = labels.indexOf('Benefits');
        otherCostsIndex = labels.indexOf('Other Costs');
    }
    
    // Initialize currentYear1CostCol2, currentYear1CostCol3, currentYear1CostCol4 before the if-else if structure
    let currentYear1CostCol2 = 0;
    let currentYear1CostCol3 = 0;
    let currentYear1CostCol4 = 0;

    let baseSalaryForCalc2 = 0;
    let baseSalaryForCalc3 = 0;
    let baseSalaryForCalc4 = 0;

    if (selectedCountry === 'us') {
        baseSalaryForCalc2 = parseFloat((data.column2[labels.indexOf('Base Salary')] || '0').replace(/[^\d.-]/g, '')) || 0;
        baseSalaryForCalc3 = parseFloat((data.column3[labels.indexOf('Base Salary')] || '0').replace(/[^\d.-]/g, '')) || 0;
        baseSalaryForCalc4 = parseFloat((data.column4[labels.indexOf('Base Salary')] || '0').replace(/[^\d.-]/g, '')) || 0;

        // Calculate for Column 2
        let taxesSumCol2 = 0;
        let benefitsSumCol2 = 0;
        let otherCostsSumCol2 = 0;
        const oneTimeCostSumCol2 = baseSalaryForCalc2 * 0.15;

        for (let i = labels.indexOf('Base Salary') + 1; i < taxesIndex; i++) {
            const currentLabel = labels[i];
            if (currentLabel === 'Federal Unemployment (FUTA - 0.6%)') taxesSumCol2 += baseSalaryForCalc2 * 0.006;
            else if (currentLabel === 'State Unemployment (SUTA - Avg 3%)') taxesSumCol2 += baseSalaryForCalc2 * 0.03;
            else if (currentLabel === 'Workers\' Compensation (0.5%)') taxesSumCol2 += baseSalaryForCalc2 * 0.005;
            else if (currentLabel === 'FICA Taxes (7.65%)') taxesSumCol2 += baseSalaryForCalc2 * 0.0765;
            else taxesSumCol2 += parseFloat((data.column2[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        for (let i = taxesIndex + 1; i < benefitsIndex; i++) {
            benefitsSumCol2 += parseFloat((data.column2[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        for (let i = benefitsIndex + 1; i < otherCostsIndex; i++) {
            otherCostsSumCol2 += parseFloat((data.column2[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        currentYear1CostCol2 = baseSalaryForCalc2 + taxesSumCol2 + benefitsSumCol2 + otherCostsSumCol2 + oneTimeCostSumCol2;

        // Calculate for Column 3
        let taxesSumCol3 = 0;
        let benefitsSumCol3 = 0;
        let otherCostsSumCol3 = 0;
        const oneTimeCostSumCol3 = baseSalaryForCalc3 * 0.15;

        for (let i = labels.indexOf('Base Salary') + 1; i < taxesIndex; i++) {
            const currentLabel = labels[i];
            if (currentLabel === 'Federal Unemployment (FUTA - 0.6%)') taxesSumCol3 += baseSalaryForCalc3 * 0.006;
            else if (currentLabel === 'State Unemployment (SUTA - Avg 3%)') taxesSumCol3 += baseSalaryForCalc3 * 0.03;
            else if (currentLabel === 'Workers\' Compensation (0.5%)') taxesSumCol3 += baseSalaryForCalc3 * 0.005;
            else if (currentLabel === 'FICA Taxes (7.65%)') taxesSumCol3 += baseSalaryForCalc3 * 0.0765;
            else taxesSumCol3 += parseFloat((data.column3[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        for (let i = taxesIndex + 1; i < benefitsIndex; i++) {
            benefitsSumCol3 += parseFloat((data.column3[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        for (let i = benefitsIndex + 1; i < otherCostsIndex; i++) {
            otherCostsSumCol3 += parseFloat((data.column3[i] || '0').replace(/[^\d.-]/g, '')) || 0;
        }

        currentYear1CostCol3 = baseSalaryForCalc3 + taxesSumCol3 + benefitsSumCol3 + otherCostsSumCol3 + oneTimeCostSumCol3;

        // Calculate for Column 4 (Augmentum)
        currentYear1CostCol4 = baseSalaryForCalc4;
    }
    
    // Calculate Year 2 and Year 3 Costs based on Year 1 Cost (including one time cost)
    const year1RecurringCostCol2 = currentYear1CostCol2 - (baseSalaryForCalc2 * 0.15);
    const year1RecurringCostCol3 = currentYear1CostCol3 - (baseSalaryForCalc3 * 0.15);
    
    let currentYear2CostCol2 = year1RecurringCostCol2 * 1.03;
    let currentYear2CostCol3 = year1RecurringCostCol3 * 1.03;
    let currentYear2CostCol4 = currentYear1CostCol4; // No inflation for Augmentum

    let currentYear3CostCol2 = currentYear2CostCol2 * 1.03;
    let currentYear3CostCol3 = currentYear2CostCol3 * 1.03;
    let currentYear3CostCol4 = currentYear1CostCol4; // No inflation for Augmentum
    
    // Load collapse state
    const collapseState = loadCollapseState(selectedCountry, selectedRole);
    
    // Create data rows
    labels.forEach((label, index) => {
        const dataRow = document.createElement('tr');
        
        // Determine if this row should be hidden initially (collapsed)
        let shouldBeHidden = false;
        if (selectedCountry === 'us') {
            // Rows between Base Salary and Taxes (exclusive)
            if (index > 0 && index < taxesIndex && !collapseState.Taxes) shouldBeHidden = true;
            // Rows between Taxes and Benefits (exclusive)
            if (index > taxesIndex && index < benefitsIndex && !collapseState.Benefits) shouldBeHidden = true;
            // Rows between Benefits and Other Costs (exclusive)
            if (index > benefitsIndex && index < otherCostsIndex && !collapseState["Other Costs"]) shouldBeHidden = true;
        }
        
        if (shouldBeHidden) {
            dataRow.classList.add('hidden-row');
        }
        
        if (label === 'Year 1 Cost (including one time cost)') {
            dataRow.classList.add('double-top-border');
        }
        
        if (label === 'Total 3 Year Cost') {
            dataRow.classList.add('double-top-border');
            dataRow.classList.add('double-bottom-border');
        }
        
        // Add dark top border to specific rows conditionally
        if (label === 'Base Salary') {
            dataRow.classList.add('top-dark-border');
        } else if (['Taxes', 'Benefits', 'Other Costs'].includes(label)) {
            // Only add border if the section is collapsed
            if (!collapseState[label]) {
                dataRow.classList.add('top-dark-border');
            }
        }
        
        // Label column
        const labelCell = document.createElement('td');
        labelCell.textContent = label;

        // Check if the current label is one of the sub-labels
        const isUSSubLabel = selectedCountry === 'us' && (
            usSubLabels.includes(label) ||
            usBenefitsSubLabels.includes(label) ||
            (usOtherCostsSubLabels.includes(label) && label !== 'One time recruitment cost (15%)')
        );

        if (isUSSubLabel) {
            labelCell.className = 'sublabel-column';
        } else {
            labelCell.className = 'label-column';
            dataRow.classList.add('bold-row-border');
        }
        
        // Add collapsible functionality for specific rows
        if (selectedCountry === 'us' && (label === 'Taxes' || label === 'Benefits' || label === 'Other Costs')) {
            dataRow.classList.add('collapsible-row');
            if (collapseState[label]) dataRow.classList.add('expanded');
            dataRow.addEventListener('click', function() {
                toggleCollapse(label, index, labels, selectedCountry, selectedRole);
            });
        }
        
        dataRow.appendChild(labelCell);
        
        // Column 2 data
        const col2Cell = document.createElement('td');
        let col2CalculatedValue = null;

        if (selectedCountry === 'us') {
            if (label === 'Federal Unemployment (FUTA - 0.6%)') {
                col2CalculatedValue = baseSalaryForCalc2 * 0.006;
            } else if (label === 'State Unemployment (SUTA - Avg 3%)') {
                col2CalculatedValue = baseSalaryForCalc2 * 0.03;
            } else if (label === 'Workers\' Compensation (0.5%)') {
                col2CalculatedValue = baseSalaryForCalc2 * 0.005;
            } else if (label === 'FICA Taxes (7.65%)') {
                col2CalculatedValue = baseSalaryForCalc2 * 0.0765;
            } else if (label === 'Taxes') {
                // Sum the calculated tax values
                const federalUnemployment = baseSalaryForCalc2 * 0.006;
                const stateUnemployment = baseSalaryForCalc2 * 0.03;
                const workersCompensation = baseSalaryForCalc2 * 0.005;
                const ficaTaxes = baseSalaryForCalc2 * 0.0765;
                col2CalculatedValue = federalUnemployment + stateUnemployment + workersCompensation + ficaTaxes;
            } else if (label === 'Benefits') {
                let sumBenefits = 0;
                const startIndex = labels.indexOf('Taxes') + 1;
                const endIndex = labels.indexOf('Benefits');
                for (let i = startIndex; i < endIndex; i++) {
                    sumBenefits += parseFloat((data.column2[i] || '0').replace(/[^\d.-]/g, '')) || 0;
                }
                col2CalculatedValue = sumBenefits;
            } else if (label === 'Other Costs') {
                let sumOtherCosts = 0;
                const startIndex = labels.indexOf('Benefits') + 1;
                const endIndex = labels.indexOf('Other Costs');
                for (let i = startIndex; i < endIndex; i++) {
                    sumOtherCosts += parseFloat((data.column2[i] || '0').replace(/[^\d.-]/g, '')) || 0;
                }
                col2CalculatedValue = sumOtherCosts;
            } else if (label === 'One time recruitment cost (15%)') {
                col2CalculatedValue = baseSalaryForCalc2 * 0.15;
            } else if (label === 'Year 1 Cost (including one time cost)') {
                col2CalculatedValue = currentYear1CostCol2;
            } else if (label === 'Year 2 Cost (3% inflation)') {
                col2CalculatedValue = currentYear2CostCol2;
            } else if (label === 'Year 3 Cost (3% Inflation)') {
                col2CalculatedValue = currentYear3CostCol2;
            } else if (label === 'Total 3 Year Cost') {
                col2CalculatedValue = currentYear1CostCol2 + currentYear2CostCol2 + currentYear3CostCol2;
            }
        }

        if (col2CalculatedValue !== null) {
            col2Cell.textContent = formatCurrency(col2CalculatedValue);
        } else if (label === 'Year 2 Cost (3% inflation)') {
            col2Cell.textContent = formatCurrency(currentYear2CostCol2);
        } else if (label === 'Year 3 Cost (3% Inflation)') {
            col2Cell.textContent = formatCurrency(currentYear3CostCol2);
        } else if (label === 'Total 3 Year Cost') {
            const total3YearCostCol2 = currentYear1CostCol2 + currentYear2CostCol2 + currentYear3CostCol2;
            col2Cell.textContent = formatCurrency(total3YearCostCol2);
        } else {
            col2Cell.textContent = data.column2[index] || formatCurrency(0);
        }
        col2Cell.className = 'currency';
        dataRow.appendChild(col2Cell);
        
        // Column 3 data
        const col3Cell = document.createElement('td');
        let col3CalculatedValue = null;

        if (selectedCountry === 'us') {
            if (label === 'Federal Unemployment (FUTA - 0.6%)') {
                col3CalculatedValue = baseSalaryForCalc3 * 0.006;
            } else if (label === 'State Unemployment (SUTA - Avg 3%)') {
                col3CalculatedValue = baseSalaryForCalc3 * 0.03;
            } else if (label === 'Workers\' Compensation (0.5%)') {
                col3CalculatedValue = baseSalaryForCalc3 * 0.005;
            } else if (label === 'FICA Taxes (7.65%)') {
                col3CalculatedValue = baseSalaryForCalc3 * 0.0765;
            } else if (label === 'Taxes') {
                // Sum the calculated tax values
                const federalUnemployment = baseSalaryForCalc3 * 0.006;
                const stateUnemployment = baseSalaryForCalc3 * 0.03;
                const workersCompensation = baseSalaryForCalc3 * 0.005;
                const ficaTaxes = baseSalaryForCalc3 * 0.0765;
                col3CalculatedValue = federalUnemployment + stateUnemployment + workersCompensation + ficaTaxes;
            } else if (label === 'Benefits') {
                let sumBenefits = 0;
                const startIndex = labels.indexOf('Taxes') + 1;
                const endIndex = labels.indexOf('Benefits');
                for (let i = startIndex; i < endIndex; i++) {
                    sumBenefits += parseFloat((data.column3[i] || '0').replace(/[^\d.-]/g, '')) || 0;
                }
                col3CalculatedValue = sumBenefits;
            } else if (label === 'Other Costs') {
                let sumOtherCosts = 0;
                const startIndex = labels.indexOf('Benefits') + 1;
                const endIndex = labels.indexOf('Other Costs');
                for (let i = startIndex; i < endIndex; i++) {
                    sumOtherCosts += parseFloat((data.column3[i] || '0').replace(/[^\d.-]/g, '')) || 0;
                }
                col3CalculatedValue = sumOtherCosts;
            } else if (label === 'One time recruitment cost (15%)') {
                col3CalculatedValue = baseSalaryForCalc3 * 0.15;
            } else if (label === 'Year 1 Cost (including one time cost)') {
                col3CalculatedValue = currentYear1CostCol3;
            } else if (label === 'Year 2 Cost (3% inflation)') {
                col3CalculatedValue = currentYear2CostCol3;
            } else if (label === 'Year 3 Cost (3% Inflation)') {
                col3CalculatedValue = currentYear3CostCol3;
            } else if (label === 'Total 3 Year Cost') {
                col3CalculatedValue = currentYear1CostCol3 + currentYear2CostCol3 + currentYear3CostCol3;
            }
        }

        if (col3CalculatedValue !== null) {
            col3Cell.textContent = formatCurrency(col3CalculatedValue);
        } else if (label === 'Year 2 Cost (3% inflation)') {
            col3Cell.textContent = formatCurrency(currentYear2CostCol3);
        } else if (label === 'Year 3 Cost (3% Inflation)') {
            col3Cell.textContent = formatCurrency(currentYear3CostCol3);
        } else if (label === 'Total 3 Year Cost') {
            const total3YearCostCol3 = currentYear1CostCol3 + currentYear2CostCol3 + currentYear3CostCol3;
            col3Cell.textContent = formatCurrency(total3YearCostCol3);
        } else {
            col3Cell.textContent = data.column3[index] || formatCurrency(0);
        }
        col3Cell.className = 'currency';
        dataRow.appendChild(col3Cell);
        
        // Column 4 data (Augmentum)
        const col4Cell = document.createElement('td');
        let col4CalculatedValue = null;

        if (selectedCountry === 'us') {
            if (label === 'Taxes' || label === 'Benefits' || label === 'Other Costs' || label === 'One time recruitment cost (15%)') {
                col4CalculatedValue = 0;
            } else if (label === 'Year 1 Cost (including one time cost)') {
                col4CalculatedValue = currentYear1CostCol4;
            } else if (label === 'Year 2 Cost (3% inflation)') {
                col4CalculatedValue = currentYear2CostCol4;
            } else if (label === 'Year 3 Cost (3% Inflation)') {
                col4CalculatedValue = currentYear3CostCol4;
            } else if (label === 'Total 3 Year Cost') {
                col4CalculatedValue = currentYear1CostCol4 + currentYear2CostCol4 + currentYear3CostCol4;
            }
        }
        
        if (col4CalculatedValue !== null) {
            col4Cell.textContent = formatCurrency(col4CalculatedValue);
        } else if (label === 'Year 2 Cost (3% inflation)') {
            col4Cell.textContent = formatCurrency(currentYear2CostCol4);
        } else if (label === 'Year 3 Cost (3% Inflation)') {
            col4Cell.textContent = formatCurrency(currentYear3CostCol4);
        } else if (label === 'Total 3 Year Cost') {
            const total3YearCostCol4 = currentYear1CostCol4 + currentYear2CostCol4 + currentYear3CostCol4;
            col4Cell.textContent = formatCurrency(total3YearCostCol4);
        } else {
            col4Cell.textContent = data.column4[index] || formatCurrency(0);
        }
        // Bold values for specific rows in cols 2, 3, and 4
        const boldValueRows = [
            'Base Salary',
            'Taxes',
            'Benefits',
            'Other Costs',
            'One time recruitment cost (15%)',
            'Year 1 Cost (including one time cost)',
            'Year 2 Cost (3% inflation)',
            'Year 3 Cost (3% Inflation)',
            'Total 3 Year Cost'
        ];
        if (boldValueRows.includes(label)) {
            dataRow.style.fontWeight = 'bold';
            col2Cell.style.fontWeight = 'bold';
            col3Cell.style.fontWeight = 'bold';
            col4Cell.style.fontWeight = 'bold';
        }
        col4Cell.className = 'currency augmentum-column';
        dataRow.appendChild(col4Cell);
        
        // Add pale blue background to total real cost rows for both countries
        if (label === 'Year 1 Cost (including one time cost)' || label === 'Year 2 Cost (3% inflation)' || label === 'Year 3 Cost (3% Inflation)') {
            dataRow.classList.add('total-real-cost-bg');
        } else if (label === 'Total 3 Year Cost') {
            dataRow.classList.add('total-three-year-cost-bg'); // New class for pale green
        }
        
        roiTable.appendChild(dataRow);
    });
    
    // Add the new "Total savings over 3 years" row
    const savingsRow = document.createElement('tr');
    const savingsCell = document.createElement('td');
    savingsCell.colSpan = 4; // Merge all 4 columns
    savingsCell.classList.add('total-savings-row'); // Add a class for potential styling (no background)

    const total3YearCostCol2 = currentYear1CostCol2 + currentYear2CostCol2 + currentYear3CostCol2;
    const total3YearCostCol3 = currentYear1CostCol3 + currentYear2CostCol3 + currentYear3CostCol3;
    const total3YearCostCol4 = currentYear1CostCol4 + currentYear2CostCol4 + currentYear3CostCol4;

    const savingsXXX = total3YearCostCol2 - total3YearCostCol4;
    const savingsYYY = total3YearCostCol3 - total3YearCostCol4;

    const totalSavingsLabelCell = document.createElement('td');
    totalSavingsLabelCell.colSpan = 4; // Merge all 4 columns
    totalSavingsLabelCell.classList.add('total-savings-label'); // Add a class for potential styling (no background)

    totalSavingsLabelCell.textContent = `Total savings over 3 years from ${formatCurrency(savingsXXX)} to ${formatCurrency(savingsYYY)}`;
    totalSavingsLabelCell.style.fontWeight = 'bold';
    totalSavingsLabelCell.style.textAlign = 'center'; // Center the text

    savingsRow.appendChild(totalSavingsLabelCell);
    roiTable.appendChild(savingsRow);

    // Show table
    tableContainer.style.display = 'block';
}

function toggleCollapse(label, rowIndex, labels, country, role) {
    const rows = roiTable.querySelectorAll('tr');
    const currentRow = rows[rowIndex + 2]; // +2 for two header rows
    
    // Load current state
    const collapseState = loadCollapseState(country, role);
    let changed = false;
    
    if (label === 'Taxes') {
        collapseState.Taxes = !collapseState.Taxes;
        changed = true;
        const baseSalaryIndex = labels.indexOf('Base Salary');
        const taxesIndex = labels.indexOf('Taxes');
        
        for (let i = baseSalaryIndex + 1; i < taxesIndex; i++) {
            const targetRow = rows[i + 2]; // +2 for two header rows
            if (targetRow) {
                targetRow.classList.toggle('hidden-row');
            }
        }
    } else if (label === 'Benefits') {
        collapseState.Benefits = !collapseState.Benefits;
        changed = true;
        const taxesIndex = labels.indexOf('Taxes');
        const benefitsIndex = labels.indexOf('Benefits');
        
        for (let i = taxesIndex + 1; i < benefitsIndex; i++) {
            const targetRow = rows[i + 2]; // +2 for two header rows
            if (targetRow) {
                targetRow.classList.toggle('hidden-row');
            }
        }
    } else if (label === 'Other Costs') {
        collapseState["Other Costs"] = !collapseState["Other Costs"];
        changed = true;
        const benefitsIndex = labels.indexOf('Benefits');
        const otherCostsIndex = labels.indexOf('Other Costs');
        
        for (let i = benefitsIndex + 1; i < otherCostsIndex; i++) {
            const targetRow = rows[i + 2]; // +2 for two header rows
            if (targetRow) {
                targetRow.classList.toggle('hidden-row');
            }
        }
    }
    
    // Toggle the expanded class for the triangle
    currentRow.classList.toggle('expanded');
    
    if (changed) {
        saveCollapseState(country, role, collapseState);
        updateUrlParams(); // Update URL after collapse state changes
    }
}

