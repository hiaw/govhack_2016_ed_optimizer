#arrival <- read.csv("arrivdata.csv", na.strings = "NULL")
names(arrival)
#arrival$year <- as.numeric(format(arrival$Month..Year, "%Y"))
# Recoded the age to make it 0-14, 15-19, 20-24, 25-29, 30+
arrival$Agenew <- arrival$Age.Band

y <- function(x) {
    if (x == "0-4")
      y = "0-14"
    else if(x == "5-9")
      y = "0-14"
    else if(x == "10-14")
      y= "0-14"
    else if(x == "15-19")
      y = "15-19"
    else if(x == "20-24")
      y = "20-24"
    else if(x == "25-29")
      y = "25-29"
    else
      y = "30+"
}

# Recoded age bands
arrival$age_new <- sapply(arrival$Agenew, y)

## Create a function for writing one way tables withe N and %s
##

oneway_table <- function(x){
  count <- table(x)
  percent <- round(prop.table(count)*100, 2)
  return(cbind(count, percent))
}

# one_way table for age distribution
oneway_table(arrival$age_new)

# table(arrival$Agenew)
#
# We create a data subset only for those aged 15-29
# Create a separate data set for 15-29 year olds and examine the same thing there
arrival_15_29 <- subset(arrival,
                        age_new == "15-19" | age_new == "20-24" | age_new == "25-29")

## Two way tables
## Write a function of bivariate tables
##
twoway_table <- function(x,y){
  counts <- table(x,y)
  row_percents <- round(prop.table(counts, 1)*100, 3)
  p_value <- prop.test(counts)$p.value
  return(cbind(counts[,1], row_percents[,1], counts[,2], row_percents[,2]))
}

## Write a function for pvalues for bivariate tables
##
pvalue <- function(x,y){
  prop.test(table(x,y)$p.value)
}

## Create a binary variable for Triage scores > 3 that is, triage scores 4, 5
## This is needed because higher triage scores indicate that less urgent 4,5 = less urgent
##
# Create a binary variable for age band 15-29 versus younger and older for comparison

yy <- function(x){
  if(x == "0-14")
  yy = "0-14"
  else if(x == "15-19")
  yy = "15-29"
  else if(x == "20-24")
  yy = "15-29"
  else if(x == "25-29")
  yy = "15-29"
  else
  yy = "30+"
}

# create a variable for 15-29 and older or younger
arrival$age_15_29 <- sapply(arrival$age_new, yy)

## Create a binary variable for less serious or less urgent triages

arrival$less_urgent <- arrival$Triage > 3
table(arrival$less_urgent)

## Recode the referral sources to make them simpler

## Recode referral source
##
z <- function(x) {
  if (x == "After Hours Surgery")
    z = "After Hours Surgery"
  else if(x == "Ambulance")
    z = "Ambulance"
  else if(x == "Ashburton Hospital")
    z = "Hospital"
  else if(x == "Ashburton Outpatient")
    z = "Outpatient"
  else if(x == "Burwood Hospital")
    z = "Hospital"
  else if(x == "Burwood Outpatient")
    z = "Outpatient"
  else if(x == "Chch Womens Hospital")
    z = "Hospital"
  else if(x == "Christchurch Outpat.")
    z = "Outpatient"
  else if(x == "Employer")
    z = "Employer"
  else if(x == "Family/Friends")
    z = "Friends"
  else if(x == "Family/Friends W/L")
    z = "Friends"
  else if(x == "Gen Practitioner W/L")
    z = "GP"
  else if(x == "Gen Practitioner W/L")
    z = "GP"
  else if(x == "General Practitioner")
    z = "GP"
  else if(x == "Grey Hospital")
    z = "Hospital"
  else if(x == "Healthline")
    z = "Services"
  else if(x == "Moorehouse Med Centre")
    z = "Outpatients"
  else if(x == "Nursing Home")
    z = "Nursing Home"
  else if(x == "Other Hospital")
    z = "Hospital"
  else if(x == "Outside Agencies")
    z = "Others"
  else if(x == "Overseas Referral")
    z = "Others"
  else if(x == "Police")
    z = "Police"
  else if(x == "Princess Margaret")
    z = "Hospital"
  else if(x == "Prison Services")
    z = "Prison"
  else if(x == "Private Specialist")
    z = "GP"
  else if(x == "Psych Emerg Services")
    z = "Services"
  else if(x == "Scheduled Return")
    z = "Return"
  else if(x == "Self")
    z = "Self"
  else if(x == "Sunnyside Hospital")
    z = "Hospital"
  else if(x == "Timaru Hospital")
    z = "Hospital"
  else if(x == "Unscheduled Return")
    z = "Return"
  else
    z = "Unknown"
}

arrival$ref_source <- sapply(arrival$Referral.Source, z)

# Simple table to see how people are referred
#
ref_source_table <- oneway_table(arrival$ref_source)
ref_source_table_ordered <- ref_source_table[order(ref_source_table[,2], decreasing = T),]
barplot(ref_source_table_ordered[,2],
        main = "Sources of referral to Emergency Department for all people",
        xlab = "Sources of Referral",
        ylab = "Percent of Referrals")

## this table and plot shows us that in general people are self-referred
## Self, ambulance, Friends, GP are the four more common sources of arrivals
# Same story with 15-29 year olds

## Let's see how 15-29 year olds are referred
##
ref_source_table_15_29 <- oneway_table(arrival_15_29$ref_source)
ref_source_table_15_29_ordered <- ref_source_table_15_29[order(ref_source_table_15_29[,2], decreasing = T),]
barplot(ref_source_table_15_29_ordered[,2],
        main = "Sources of referral to Emergency Department for 15-29 years",
        xlab = "Sources of Referral",
        ylab = "Percent of Referrals")
## Self ambulance, friends, and GPs are main referral sources
## Distribution of Ethnicity

eth_table_all <- oneway_table(arrival$Ethnicity)
eth_table_15_29 <- oneway_table(arrival_15_29$Ethnicity)

## We see that in both cases Europeans are higher %s and similar distributions

# Very similar between all patients and those between 15-29 years
# mode of arrival (all, then 15-29 years)
mode_table_all <- oneway_table(arrival$Arrival.Method)
mode_table_15_29 <- oneway_table(arrival_15_29$Arrival.Method)
mode_table_all_ordered <- mode_table_all[order(mode_table_all[,2], decreasing = T),]

## Mode of travel to the emergency room similar for both the groups


## Factors associated with less urgent emergency admissions
## Age, gender, ethnicity, mode of arrival, source of referrals

## Age
tr_age <- twoway_table(arrival$age_15_29, arrival$less_urgent)
tr_age_ordered <- tr_age[order(tr_age[,4], decreasing = T),]
# Plot it
barplot(tr_age_ordered[,4],
        main = "Plot of Age versus Less urgent Emergency Arrivals",
        xlab = "Age in years",
        ylab = "Percent Arrivals"
      )

## We see age 15-29 years are associated with less urgent emergency arrivals
##

##
# Gender
##
tbinsex <- table(arrival$Gender, arrival$less_urgent)
tbinsexp <- round(prop.table(tbinsex, 1)*100, 2)
tbintest2 <- round(prop.test(tbinsex)$p.value, 3)
print(tbinsexp)
## Males are more likely to have lower triage, statistically significant

# Ethnicity
tbin_eth <- bivariate_table(arrival$Ethnicity, arrival$less_urgent)
tbin_eth_ordered <- tbin_eth[order(tbin_eth[,4], decreasing = T),]
pval_eth <- prop.test(table(arrival$Ethnicity, arrival$less_urgent))

# Middle eastern/Africans/Latinas usually have less urgent emergency room visits but
# this is statistically significant

## barplot
barplot(tbin_eth_ordered[,4],
        main = "Chances of Low Risk Emergency Room Visit by Ethnicity",
        xlab = "Ethnicity",
        ylab = "Percentage of Visits",
        col = 'black')
## Some ethinicty have higher chance of low risk emergency room admissions, and significant

## less urgent and mode of arrival
##
tbin_method <- bivariate_table(arrival$Arrival.Method, arrival$less_urgent)
tbin_method_ordered <- tbin_method[order(tbin_method[,4], decreasing = T),]
pval_method <- prop.test(table(arrival$Arrival.Method, arrival$less_urgent))

# Arrival methods by self usually have less urgent emergency room visits but
# this is statistically significant

## barplot
barplot(tbin_method_ordered[,4],
        main = "Chances of Low Risk Emergency Room Visit by Arrival Method",
        xlab = "Arrival Method",
        ylab = "Percentage of Visits",
        col = 'black')
## Arrivals by self and driven by others are associated with less urgent emergency room visits
##
##

tbin_source <- bivariate_table(arrival$ref_source, arrival$less_urgent)
tbin_source_ordered <- tbin_source[order(tbin_source[,4], decreasing = T),]
pval_source <- prop.test(table(arrival$ref_source, arrival$less_urgent))

# Arrival methods by self usually have less urgent emergency room visits but
# this is statistically significant

## barplot
barplot(tbin_source_ordered[,4],
        main = "Chances of Low Risk Emergency Room Visit by Source of Referral",
        xlab = "Source of Referral",
        ylab = "Percentage of Low Risk Emergency Visits",
        col = 'black')


##
## Set up a logistic regression of low risk emergency visits against all factors
## this can then form the basis of a scoring
log_reg_lowrisk_er <- glm(less_urgent ~ age_new + Gender + Ethnicity + Arrival.Method
                          + ref_source,
                          data = arrival,
                          family = binomial(link = "logit"))

print(summary(log_reg_lowrisk_er))

# 0.64 + 0.09 -0.02 + 1.66 + 0.62

## Separate Analysis as to age brackets and diagnoses
# top20dx <- read.csv("top20dx.csv")
agelist <- table(top20dx$Age.Band)
agepc <- round(prop.table(agelist)*100, 3)
cbind(agelist, agepc)
summary(top20dx)







