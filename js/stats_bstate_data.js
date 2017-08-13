{"errorFlag":"S","errorMsg":"Success","errorCode":"","list":[{
  "responseHeader":{
    "status":0,
    "QTime":8299,
    "params":{
      "lowercaseOperators":"true",
      "facet":"true",
      "indent":"true",
      "_stateVer_":"IR_MC_MedicalSavings:228",
      "stats":"true",
      "synonyms":"true",
      "collection":"IR_MC_MedicalSavings",
      "wt":"javabin",
      "shards.tolerant":["true",
        "true"],
      "version":"2",
      "rows":"0",
      "synonyms.synonymBoost":"1.2",
      "start":"0",
      "stats.field":["{!tag=t1 sum=true}total_billing_audited",
        "{!tag=t1 sum=true}ppo_amt",
        "{!tag=t1 sum=true}new_bills_ct_pen",
        "{!tag=t1 sum=true}network_bills_ct_pen"],
      "q":"*:*",
      "facet.pivot":"{!stats=t1}benefit_st_nm",
      "fq":"scl_sup_client_num:\"001245888\" AND process_dt:[\"2017-01-01T00:00:00Z\" TO \"2017-06-30T00:00:00Z\"]",
      "synonyms.originalBoost":"2.0"}},
  "response":{"numFound":1511,"start":0,"maxScore":1.0,"docs":[]
  },
  "facet_counts":{
    "facet_queries":{},
    "facet_fields":{},
    "facet_dates":{},
    "facet_ranges":{},
    "facet_intervals":{},
    "facet_heatmaps":{},
    "facet_pivot":{
      "benefit_st_nm":[{
          "field":"benefit_st_nm",
          "value":"Michigan",
          "count":277,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":93695.82999999999},
              "ppo_amt":{
                "sum":71863.50999999998},
              "new_bills_ct_pen":{
                "sum":250.0},
              "network_bills_ct_pen":{
                "sum":225.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"California",
          "count":254,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":110564.87},
              "ppo_amt":{
                "sum":99653.75},
              "new_bills_ct_pen":{
                "sum":229.0},
              "network_bills_ct_pen":{
                "sum":190.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Colorado",
          "count":196,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":179986.13},
              "ppo_amt":{
                "sum":161113.36000000002},
              "new_bills_ct_pen":{
                "sum":171.0},
              "network_bills_ct_pen":{
                "sum":161.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Pennsylvania",
          "count":88,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":26126.43},
              "ppo_amt":{
                "sum":22868.43},
              "new_bills_ct_pen":{
                "sum":79.0},
              "network_bills_ct_pen":{
                "sum":76.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Nevada",
          "count":84,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":65250.670000000006},
              "ppo_amt":{
                "sum":60458.65000000001},
              "new_bills_ct_pen":{
                "sum":75.0},
              "network_bills_ct_pen":{
                "sum":68.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"New York",
          "count":70,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":17961.05},
              "ppo_amt":{
                "sum":15909.02},
              "new_bills_ct_pen":{
                "sum":67.0},
              "network_bills_ct_pen":{
                "sum":53.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Tennessee",
          "count":70,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":26689.46},
              "ppo_amt":{
                "sum":25529.46},
              "new_bills_ct_pen":{
                "sum":66.0},
              "network_bills_ct_pen":{
                "sum":64.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Connecticut",
          "count":65,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":21342.98},
              "ppo_amt":{
                "sum":20880.26},
              "new_bills_ct_pen":{
                "sum":63.0},
              "network_bills_ct_pen":{
                "sum":61.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Oregon",
          "count":54,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":14860.41},
              "ppo_amt":{
                "sum":4893.2300000000005},
              "new_bills_ct_pen":{
                "sum":43.0},
              "network_bills_ct_pen":{
                "sum":19.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Florida",
          "count":48,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":14710.64},
              "ppo_amt":{
                "sum":12440.52},
              "new_bills_ct_pen":{
                "sum":43.0},
              "network_bills_ct_pen":{
                "sum":41.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"New Jersey",
          "count":44,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":30622.44},
              "ppo_amt":{
                "sum":27593.2},
              "new_bills_ct_pen":{
                "sum":43.0},
              "network_bills_ct_pen":{
                "sum":39.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Louisiana",
          "count":31,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":23477.65},
              "ppo_amt":{
                "sum":22794.89},
              "new_bills_ct_pen":{
                "sum":30.0},
              "network_bills_ct_pen":{
                "sum":25.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"South Carolina",
          "count":30,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":5655.58},
              "ppo_amt":{
                "sum":5149.820000000001},
              "new_bills_ct_pen":{
                "sum":25.0},
              "network_bills_ct_pen":{
                "sum":24.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"North Carolina",
          "count":26,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":7733.860000000001},
              "ppo_amt":{
                "sum":7733.860000000001},
              "new_bills_ct_pen":{
                "sum":24.0},
              "network_bills_ct_pen":{
                "sum":24.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Missouri",
          "count":22,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":9323.59},
              "ppo_amt":{
                "sum":8236.89},
              "new_bills_ct_pen":{
                "sum":18.0},
              "network_bills_ct_pen":{
                "sum":14.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"New Mexico",
          "count":21,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":3887.69},
              "ppo_amt":{
                "sum":3337.69},
              "new_bills_ct_pen":{
                "sum":21.0},
              "network_bills_ct_pen":{
                "sum":20.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Illinois",
          "count":20,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":7854.240000000001},
              "ppo_amt":{
                "sum":7149.64},
              "new_bills_ct_pen":{
                "sum":20.0},
              "network_bills_ct_pen":{
                "sum":18.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Virginia",
          "count":19,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":10959.259999999998},
              "ppo_amt":{
                "sum":5195.26},
              "new_bills_ct_pen":{
                "sum":14.0},
              "network_bills_ct_pen":{
                "sum":10.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Georgia",
          "count":16,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":7139.47},
              "ppo_amt":{
                "sum":5621.47},
              "new_bills_ct_pen":{
                "sum":15.0},
              "network_bills_ct_pen":{
                "sum":14.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Indiana",
          "count":12,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":3252.2799999999997},
              "ppo_amt":{
                "sum":3096.6499999999996},
              "new_bills_ct_pen":{
                "sum":10.0},
              "network_bills_ct_pen":{
                "sum":9.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Nebraska",
          "count":11,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":1656.81},
              "ppo_amt":{
                "sum":1422.13},
              "new_bills_ct_pen":{
                "sum":9.0},
              "network_bills_ct_pen":{
                "sum":9.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Alabama",
          "count":9,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":4625.5199999999995},
              "ppo_amt":{
                "sum":4469.259999999999},
              "new_bills_ct_pen":{
                "sum":7.0},
              "network_bills_ct_pen":{
                "sum":7.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Texas",
          "count":9,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":4122.58},
              "ppo_amt":{
                "sum":0.0},
              "new_bills_ct_pen":{
                "sum":8.0},
              "network_bills_ct_pen":{
                "sum":0.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Massachusetts",
          "count":7,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":2451.2},
              "ppo_amt":{
                "sum":2053.2},
              "new_bills_ct_pen":{
                "sum":6.0},
              "network_bills_ct_pen":{
                "sum":4.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Hawaii",
          "count":6,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":2939.98},
              "ppo_amt":{
                "sum":94.34},
              "new_bills_ct_pen":{
                "sum":4.0},
              "network_bills_ct_pen":{
                "sum":1.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Maryland",
          "count":5,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":958.11},
              "ppo_amt":{
                "sum":958.11},
              "new_bills_ct_pen":{
                "sum":5.0},
              "network_bills_ct_pen":{
                "sum":5.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Utah",
          "count":4,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":1761.67},
              "ppo_amt":{
                "sum":470.0},
              "new_bills_ct_pen":{
                "sum":4.0},
              "network_bills_ct_pen":{
                "sum":2.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Washington",
          "count":3,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":546.0},
              "ppo_amt":{
                "sum":546.0},
              "new_bills_ct_pen":{
                "sum":3.0},
              "network_bills_ct_pen":{
                "sum":3.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Minnesota",
          "count":2,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":320.0},
              "ppo_amt":{
                "sum":0.0},
              "new_bills_ct_pen":{
                "sum":2.0},
              "network_bills_ct_pen":{
                "sum":0.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Oklahoma",
          "count":2,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":1336.2},
              "ppo_amt":{
                "sum":1336.2},
              "new_bills_ct_pen":{
                "sum":2.0},
              "network_bills_ct_pen":{
                "sum":2.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Wyoming",
          "count":2,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":1129.0},
              "ppo_amt":{
                "sum":0.0},
              "new_bills_ct_pen":{
                "sum":0.0},
              "network_bills_ct_pen":{
                "sum":0.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Arizona",
          "count":1,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":0.0},
              "ppo_amt":{
                "sum":0.0},
              "new_bills_ct_pen":{
                "sum":0.0},
              "network_bills_ct_pen":{
                "sum":0.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"District of Columbia",
          "count":1,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":803.0},
              "ppo_amt":{
                "sum":803.0},
              "new_bills_ct_pen":{
                "sum":1.0},
              "network_bills_ct_pen":{
                "sum":1.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"Kansas",
          "count":1,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":34.81},
              "ppo_amt":{
                "sum":0.0},
              "new_bills_ct_pen":{
                "sum":1.0},
              "network_bills_ct_pen":{
                "sum":0.0}}}},
        {
          "field":"benefit_st_nm",
          "value":"New Hampshire",
          "count":1,
          "stats":{
            "stats_fields":{
              "total_billing_audited":{
                "sum":49.0},
              "ppo_amt":{
                "sum":49.0},
              "new_bills_ct_pen":{
                "sum":1.0},
              "network_bills_ct_pen":{
                "sum":1.0}}}}]}},
  "stats":{
    "stats_fields":{
      "total_billing_audited":{
        "sum":703828.4100000001},
      "ppo_amt":{
        "sum":603720.8},
      "new_bills_ct_pen":{
        "sum":1359.0},
      "network_bills_ct_pen":{
        "sum":1190.0}}}}
]}