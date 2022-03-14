# Election_Analysis
Data Bootcamp Module 3 - Python

## Overview
An employee at Colorado Board of Elections needs help with finding certain metrics for the election audit of a recent local congressional election.

1. Calculate the total number of votes cast
2. Get a complete list of candidates who received votes
3. Calculate the percentage of votes each candidate won
4. Calculate the total number of votes each candidate won
5. Determine the winner of the election based on popular vote

## Resources
- Data Source: election_results.csv
- Software: Python 3.7.6, VS Code

## Result
The analysis of the election show that:
- There were a total of 369,711 votes cast
- The candidates were:
      - Charles Casper Stockham
      - Diana DeGette
      - Raymon Anthony Doane
- The candidate results were: 
      - Charles Casper Stockham: 23.0% (85,213)
      - Diana DeGette: 73.8% (272,892)
      - Raymon Anthony Doane: 3.1% (11,606)
- The winner of the election was:
      - Dianna DeGette, who received 73.8% of the vote and 272,892 votes. 

## Challenge Overview
The employees (Seth and Tom) wanted further information regarding the election. Specifically,

1. The voter turnout for each county
2. The percentage of votes from each county out of the total count
3. The county with the highest turnout

As such, I used the same resources previously provided and edited/added to the code to accomodate for the additional requests. 

## Challenge Results
The additional analysis showed that:
- The counties in the election were: 
      - Jefferson
      - Denver
      - Arapahoe
- The results by county were: 
      - Jefferson: 10.5% (38,855)
      - Denver: 82.8% (306,055)
      - Arapahoe: 6.7% (24,801)
- The largest county turnover was at: Denver

## Election-Audit Summary
Dear Election Commission of Colorado, I have now completed the analysis request and created coding that will automate various values based on the election_results.csv. Results can be seen in the election_results.txt, or below:

<img width="295" alt="Screen Shot 2022-03-13 at 10 47 38 PM" src="https://user-images.githubusercontent.com/100388238/158096252-e4bd2dad-771f-41c3-bac7-339a72e0543f.png">

In addition, I believe that this script can be beneficial to not only this specific instance, but also analysis for any future elections. 

For example:
      1. We can add in more valuables such as: registered/unregistered voter, what party the voter is in (if any), gender of the voters, etc. We can calculate similar percentages and largest groups using the same structure, for these other demographics. 
      2. We can modify the script to should variables with the **least** results (i.e. county with least turnout, candidate with the least amount of votes), what we have to do is change the 
    
    " if (votes_by_county > largest_county_turnout_votes):
            largest_county_turnout_votes = votes_by_county
            largest_county_turnout = county_name "
            
            to something like
            
      " if (votes_by_county < smallest_county_turnout_votes):
            smallest_county_turnout_votes = votes_by_county
            smallest_county_turnout = county_name "
            
            (this might not be exactly right, but basically the idea of it)
