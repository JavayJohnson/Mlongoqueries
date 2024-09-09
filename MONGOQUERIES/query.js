Sample_airbnb: listingsAndReviews
Filter data by property type
{property_type : "House"}
Query Results: 1-20 of many



Sample_airbnb: listingsAndReviews
Filter data by accomodations greater than 15 using the "$gt" operator
{ accommodates: { $gt: 15 } }
Query Results: 1-20 of many



Sample_guides: Planets
Filter data by Planetary order from sun less than 4 using the "$lt" operator
{orderFromSun: {$lt: 4} }
Query Results: 1-3 of 3



Sample_airbnb: listingsAndReviews
Filter data by Apartments or Houses using the "$in" operator
{ property_type: { $in: ["Apartment", "House"] } }
Query Results: 1-20 of many



sample_resaturants: restaurants
Filter data by burrough and cuisine type using operator "$and"
{ borough: "Bronx", cuisine: "Italian" }
Query Results: 1-20 of many



sample_resaturants: restaurants
Filter data by burroughs using the "$or" operator
{ $or: [{ borough: "Manhattan" }, { borough: "Statan Island" }] }
Query Results: 1-20 of many



sample_training: posts 
Filter data by using the "$nor" operator - show all titles that are not equal the "Bill of Rights" or the"US Constitution"
{ $nor: [{ title: "Bill of Rights" }, { title: "US Constitution" }] }
Query Results: 1-20 of many



sample_geospatial: shipwrecks
Filter data by using the "$ne" operator - show all water levels that are not equal to "always dry"
{ watlev: { $ne: "always dry" } }
Query Results: 1-20 of many



sample_geospatial: shipwrecks
Filter data by using the "$eq" operator - show all quasou that are equal to "depth unknown"
{ quasou: { $eq: "depth unknown" } }
Query Results: 1-20 of many


$not

$nin