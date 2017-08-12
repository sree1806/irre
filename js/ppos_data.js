var ppo_data_bs = {
	"responseHeader": {
		"status": 0,
		"QTime": 5921,
		"params": {
			"lowercaseOperators": "true",
			"indent": "true",
			"_stateVer_": "IR_MC_MedicalSavings:174",
			"group.limit": "1000",
			"synonyms": "true",
			"collection": "IR_MC_MedicalSavings",
			"wt": "javabin",
			"shards.tolerant": [
				"true",
				"true"
			],
			"version": "2",
			"rows": "140754554",
			"synonyms.synonymBoost": "1.2",
			"fl": "claim_no_invoice,process_dt,ppo_amt,ppo_in,total_billing_audited,network_bills_ct_pen,benefit_st_nm",
			"start": "0",
			"q": "*:*",
			"group.field": "benefit_st_nm",
			"group.sort": "process_dt desc",
			"group": "true",
			"fq": "scl_sup_client_num:\"001245888\" AND process_dt:[\"2017-01-01T00:00:00Z\" TO \"2017-06-30T00:00:00Z\"]",
			"synonyms.originalBoost": "2.0"
		}
	},
	"grouped": {
		"benefit_st_nm": {
			"matches": 1511,
			"groups": [
				{
					"groupValue": "Pennsylvania",
					"doclist": {
						"numFound": 88,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 509,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 509,
								"claim_no_invoice": "555-225066-1-1716302865"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1715600795"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 704.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 704.5,
								"claim_no_invoice": "555-225068-1-1716401453"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1710801547"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 65,
								"claim_no_invoice": "555-225068-1-1715800209"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 385,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-182778-1-1610800615"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-27T00:00:00Z",
								"total_billing_audited": 628,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 628,
								"claim_no_invoice": "555-229928-1-1714401451"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1704800838"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1704800737"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1712300865"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 515,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230993-1-1711604081"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 183.87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 183.87,
								"claim_no_invoice": "555-203830-1-1712800731"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": -311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1704800838"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": -311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1704800737"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-229928-1-1712500543"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 1939.87,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-TM71071019"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 1085,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1085,
								"claim_no_invoice": "555-230993-1-1711604081"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": -35.37,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-225068-1-1705902509"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-225068-1-1705902962"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 990,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1710801547"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 366,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 366,
								"claim_no_invoice": "555-229928-1-1710703067"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 419,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 419,
								"claim_no_invoice": "555-229928-1-1709500485"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-229928-1-1710103949"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 319,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 319,
								"claim_no_invoice": "555-229928-1-1709000275"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 146.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.67,
								"claim_no_invoice": "555-229928-1-1709100154"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 319,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 319,
								"claim_no_invoice": "555-229928-1-1709000277"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 204,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 204,
								"claim_no_invoice": "555-229928-1-1708900835"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 1742,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1742,
								"claim_no_invoice": "555-229928-1-1708900837"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-30T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-229928-1-1708601112"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 419,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 419,
								"claim_no_invoice": "555-229928-1-1708003371"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 360,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 360,
								"claim_no_invoice": "555-230993-1-1708103850"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 500,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 500,
								"claim_no_invoice": "555-203830-1-1707902175"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 462,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 462,
								"claim_no_invoice": "555-230993-1-1708103828"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 85.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229928-1-1703403162"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 319,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 319,
								"claim_no_invoice": "555-229928-1-1707301313"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 357,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 357,
								"claim_no_invoice": "555-229928-1-1706600204"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-17T00:00:00Z",
								"total_billing_audited": 284,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284,
								"claim_no_invoice": "555-229928-1-1707301308"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-225066-1-1634400685"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 284,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284,
								"claim_no_invoice": "555-229928-1-1706600290"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 357,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 357,
								"claim_no_invoice": "555-229928-1-1705901581"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1705901574"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1705901546"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 357,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 357,
								"claim_no_invoice": "555-229928-1-1705901576"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 414.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 414.92,
								"claim_no_invoice": "555-229928-1-1706202707"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 176.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 176.48,
								"claim_no_invoice": "555-225068-1-1705902962"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 110,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 110,
								"claim_no_invoice": "555-225068-1-1705902509"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-229928-1-1705802796"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1704800737"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1704800838"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 1520,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1520,
								"claim_no_invoice": "555-203830-1-1705203042"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 317,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 317,
								"claim_no_invoice": "555-229928-1-1703901526"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 317,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 317,
								"claim_no_invoice": "555-229928-1-1703901529"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 417,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 417,
								"claim_no_invoice": "555-229928-1-1703901531"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 355,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 355,
								"claim_no_invoice": "555-229928-1-1703901788"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 319,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 319,
								"claim_no_invoice": "555-229928-1-1703901532"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1703901797"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 319,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 319,
								"claim_no_invoice": "555-229928-1-1703901530"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 317,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 317,
								"claim_no_invoice": "555-229928-1-1703901523"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-229928-1-1703901800"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 89.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 89.35,
								"claim_no_invoice": "555-203830-1-1704605986"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 1026.77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1026.77,
								"claim_no_invoice": "555-225066-1-1704403300"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 288,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 288,
								"claim_no_invoice": "555-229928-1-1703901522"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 9.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 9.5,
								"claim_no_invoice": "555-229928-1-1703403162"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 229.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.04,
								"claim_no_invoice": "555-203830-1-1703402195"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-229928-1-1703201250"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207605-1-1702402685"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 284.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284.55,
								"claim_no_invoice": "555-203830-1-1703002599"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 229.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.04,
								"claim_no_invoice": "555-203830-1-1703002598"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 284.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284.55,
								"claim_no_invoice": "555-203830-1-1702701097"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 239.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 239.38,
								"claim_no_invoice": "555-203830-1-1702701098"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207605-1-1702402478"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 176.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 176.48,
								"claim_no_invoice": "555-225066-1-1701802274"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207605-1-1701803050"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 110,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 110,
								"claim_no_invoice": "555-225066-1-1701802612"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-228440-1-1701802621"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 337.28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 337.28,
								"claim_no_invoice": "555-203830-1-1701701959"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230,
								"claim_no_invoice": "555-229928-1-1701802620"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-228440-1-1701801645"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-228440-1-1701802627"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-18T00:00:00Z",
								"total_billing_audited": 325.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 325.76,
								"claim_no_invoice": "555-203830-1-1701300867"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 239.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 239.38,
								"claim_no_invoice": "555-203830-1-1701200322"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 176.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 176.48,
								"claim_no_invoice": "555-225066-1-1700403625"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 106,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 106,
								"claim_no_invoice": "555-228440-1-1700505053"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 169.57,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.57,
								"claim_no_invoice": "555-203830-1-1701101994"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 214.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.74,
								"claim_no_invoice": "555-203830-1-1701101997"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 239.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 239.38,
								"claim_no_invoice": "555-203830-1-1701000161"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 110,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 110,
								"claim_no_invoice": "555-225066-1-1700403443"
							},
							{
								"benefit_st_nm": "Pennsylvania",
								"process_dt": "2017-01-06T00:00:00Z",
								"total_billing_audited": 214.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.74,
								"claim_no_invoice": "555-203830-1-1700300074"
							}
						]
					}
				},
				{
					"groupValue": "Michigan",
					"doclist": {
						"numFound": 277,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "555-234630-1-1717401304"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 227.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.46,
								"claim_no_invoice": "555-236377-1-1717900237"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 242.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 242.75,
								"claim_no_invoice": "555-237161-1-1717800032"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-28T00:00:00Z",
								"total_billing_audited": 229.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.53,
								"claim_no_invoice": "555-238108-1-1717800030"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-238108-1-1717201931"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 31.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 31.23,
								"claim_no_invoice": "555-234630-1-T127893440"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 171.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 171.96,
								"claim_no_invoice": "555-234630-1-T127884778"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-24T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-234630-1-1717201904"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 217.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.47,
								"claim_no_invoice": "555-240504-1-1717000298"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-240504-1-1717000655"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 105,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105,
								"claim_no_invoice": "555-234630-1-1716700261"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-236377-1-1717201916"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 167,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 167,
								"claim_no_invoice": "555-081973-1-1717100636"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-236377-1-1717201958"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 151.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.97,
								"claim_no_invoice": "555-238108-1-1715000171"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 211.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.36,
								"claim_no_invoice": "555-238108-1-1717000062"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 222.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 222.97,
								"claim_no_invoice": "555-238108-1-1715303254"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 172.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.44,
								"claim_no_invoice": "555-236377-1-1714600021"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 242.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 242.75,
								"claim_no_invoice": "555-237161-1-1717000061"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 232.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 232.85,
								"claim_no_invoice": "555-238108-1-1717001433"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 229.41,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.41,
								"claim_no_invoice": "555-238108-1-1716701479"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "555-234630-1-1716301799"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 232.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 232.73,
								"claim_no_invoice": "555-238108-1-1716500100"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 172.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.55,
								"claim_no_invoice": "555-236377-1-1716500027"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 142.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.25,
								"claim_no_invoice": "555-239808-1-1716102237"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 242.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 242.75,
								"claim_no_invoice": "555-237161-1-1716500101"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 5661,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5661,
								"claim_no_invoice": "555-238108-1-1715301958"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 250.9,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 250.9,
								"claim_no_invoice": "555-237161-1-1716400225"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 186.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 186.81,
								"claim_no_invoice": "555-237161-1-1716301464"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-237161-1-1716301462"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-237161-1-1716301333"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-237161-1-1716301412"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-237161-1-1716301452"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 187.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 187.04,
								"claim_no_invoice": "555-238108-1-1716400227"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-237161-1-1716301415"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-237161-1-1716301414"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-237161-1-1716301411"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-237161-1-1716301327"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-237161-1-1716301465"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-237161-1-1716301410"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 250.9,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 250.9,
								"claim_no_invoice": "555-238108-1-1716301395"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 105,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105,
								"claim_no_invoice": "555-234630-1-1715701046"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 105,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105,
								"claim_no_invoice": "555-234630-1-1715701052"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-237161-1-1716301404"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1716301394"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 269.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 269.83,
								"claim_no_invoice": "555-237161-1-1716301460"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-237161-1-1716301401"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-237161-1-1716301407"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 605,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 605,
								"claim_no_invoice": "555-221947-1-1715901012"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 901,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 901,
								"claim_no_invoice": "555-236377-1-1716102224"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-237161-1-1716301402"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-237161-1-1716301322"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 41.41,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 41.41,
								"claim_no_invoice": "555-233916-1-T127739438"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-238108-1-1716000486"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-236377-1-1715601983"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-238108-1-1715602032"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 370,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1715203809"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-238833-1-1715602448"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 266.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266.51,
								"claim_no_invoice": "555-236377-1-1715602327"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 180.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 180.6,
								"claim_no_invoice": "555-237161-1-1713702709"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 330,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 330,
								"claim_no_invoice": "555-234630-1-1714900179"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 66.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 66.08,
								"claim_no_invoice": "555-237161-1-1714600026"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-03T00:00:00Z",
								"total_billing_audited": 96.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.26,
								"claim_no_invoice": "555-231958-1-1715000167"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 24,
								"claim_no_invoice": "555-224573-1-1714601839"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236143-1-1709403236"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 259.39,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 259.39,
								"claim_no_invoice": "555-238108-1-1714600022"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 217.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.47,
								"claim_no_invoice": "555-237161-1-1715000179"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-238108-1-1715000172"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-238108-1-1715000168"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-31T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-236377-1-1715000176"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-31T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-236377-1-1715000173"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 125,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 125,
								"claim_no_invoice": "555-234630-1-1714300121"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 705,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 705,
								"claim_no_invoice": "555-081973-1-1714201936"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 349.24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 349.24,
								"claim_no_invoice": "555-238833-1-1714200459"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 190.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190.43,
								"claim_no_invoice": "555-238108-1-1714301226"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-237161-1-1714304459"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-236377-1-1714304451"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-238108-1-1713601989"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 5410.56,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-TM71391318"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 227.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.46,
								"claim_no_invoice": "555-238108-1-1714304457"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 2662,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2662,
								"claim_no_invoice": "555-081973-1-1713702836"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 253.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 253.97,
								"claim_no_invoice": "555-236377-1-1714200448"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-238833-1-1714200207"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-217269-1-1713001730"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 57.54,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 57.54,
								"claim_no_invoice": "555-234630-1-T127566573"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 215.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 215.25,
								"claim_no_invoice": "555-238108-1-1713201976"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 112.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.91,
								"claim_no_invoice": "555-234630-1-T127566591"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 77.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 77.16,
								"claim_no_invoice": "555-234630-1-T127566577"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 250,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 250,
								"claim_no_invoice": "555-234630-1-1713201418"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 263.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 263.44,
								"claim_no_invoice": "555-236377-1-1713800073"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 186.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 186.81,
								"claim_no_invoice": "555-238108-1-1713601931"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-238108-1-1713600941"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-234630-1-1713500505"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 217.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.47,
								"claim_no_invoice": "555-238108-1-1712401471"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-238108-1-1713602087"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 265.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 265.82,
								"claim_no_invoice": "555-236377-1-1712500225"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 220,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 220,
								"claim_no_invoice": "555-231958-1-1713102749"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 126.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 126.82,
								"claim_no_invoice": "555-237161-1-1712801900"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-13T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-236377-1-1712802144"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-13T00:00:00Z",
								"total_billing_audited": 128,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128,
								"claim_no_invoice": "555-081973-1-1713000948"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-234630-1-1712500684"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-233916-1-1712500212"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 167,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 167,
								"claim_no_invoice": "555-081973-1-1712501012"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 220.84,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 220.84,
								"claim_no_invoice": "555-233799-1-1712103367"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 193.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 193.55,
								"claim_no_invoice": "555-233916-1-1712801073"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-237001-1-1712202613"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-237161-1-1712500224"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 137.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 137.44,
								"claim_no_invoice": "555-237161-1-1712101473"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 227.11,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.11,
								"claim_no_invoice": "555-233916-1-T127396304"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 376.39,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 376.39,
								"claim_no_invoice": "555-233364-1-1711400904"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 510,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 510,
								"claim_no_invoice": "555-234630-1-1711800573"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 127.11,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 127.11,
								"claim_no_invoice": "555-236377-1-1712201432"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-03T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-236377-1-1712101580"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-03T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1712100895"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 564,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 564,
								"claim_no_invoice": "555-081973-1-1711701524"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1711701189"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 313.52,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 313.52,
								"claim_no_invoice": "555-235893-1-1711100803"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1618800940"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1623901781"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 220,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 220,
								"claim_no_invoice": "555-231958-1-1711501521"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 151.18,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.18,
								"claim_no_invoice": "555-233916-1-1711702018"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236377-1-1711701183"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 149.87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 149.87,
								"claim_no_invoice": "555-236377-1-1711003456"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-236377-1-1711601089"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 150.18,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150.18,
								"claim_no_invoice": "555-237161-1-1711100695"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-235893-1-1711100770"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-235893-1-1711100778"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236377-1-1711701422"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 272.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 272.46,
								"claim_no_invoice": "555-237161-1-1711100694"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 142.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.25,
								"claim_no_invoice": "555-237001-1-1711100109"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 228.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228.47,
								"claim_no_invoice": "555-234630-1-1710202199"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231958-1-1703001755"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 227.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.72,
								"claim_no_invoice": "555-233916-1-1710402306"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 101.13,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 101.13,
								"claim_no_invoice": "555-234630-1-1709602375"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 3617,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3617,
								"claim_no_invoice": "555-081973-1-1710801902"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 172.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.55,
								"claim_no_invoice": "555-235893-1-1711100793"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 0.84,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0.84,
								"claim_no_invoice": "555-231718-1-1709702110"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 2283,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2283,
								"claim_no_invoice": "555-081973-1-1710903634"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 5.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5.5,
								"claim_no_invoice": "555-234630-1-1709300153"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 188.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 188.26,
								"claim_no_invoice": "555-236734-1-1710402774"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 267,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 267,
								"claim_no_invoice": "555-081973-1-1710701925"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1710703557"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1710702954"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 172.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.55,
								"claim_no_invoice": "555-235893-1-1710900453"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 208.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 208.53,
								"claim_no_invoice": "555-236377-1-1710701959"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 105.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105.74,
								"claim_no_invoice": "555-233916-1-1710402299"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 105.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105.74,
								"claim_no_invoice": "555-233916-1-1710402541"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233364-1-1704700033"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 103,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 103,
								"claim_no_invoice": "555-081973-1-1710207748"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 153.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 153.23,
								"claim_no_invoice": "555-236377-1-1710001295"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230,
								"claim_no_invoice": "555-147496-1-1710204083"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-234630-1-1708801669"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 293.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 293.83,
								"claim_no_invoice": "555-235893-1-1709602277"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 211.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 211.85,
								"claim_no_invoice": "555-236377-1-1710103452"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-236377-1-1710103454"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 3955.54,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-TM70951274"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-234363-1-1706200402"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 345.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 345.6,
								"claim_no_invoice": "555-236143-1-1709301536"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 222.79,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 222.79,
								"claim_no_invoice": "555-236377-1-1709703771"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236377-1-1709703770"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-233916-1-1709403030"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-234630-1-1709400437"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 239.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 239.1,
								"claim_no_invoice": "555-233916-1-T127093302"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-235893-1-1709301578"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 42.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 42.22,
								"claim_no_invoice": "555-234630-1-T127093282"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 144.79,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 144.79,
								"claim_no_invoice": "555-233916-1-1709403188"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-236143-1-1709403230"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231958-1-1703001755"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 235,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 235,
								"claim_no_invoice": "555-081973-1-1709504292"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 304.42,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 304.42,
								"claim_no_invoice": "555-235363-1-1707904378"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 190.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190.36,
								"claim_no_invoice": "555-235893-1-1709403166"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235893-1-1709403040"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 186.45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 186.45,
								"claim_no_invoice": "555-233916-1-1708801911"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236143-1-1709403236"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-206662-1-1630705434"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 157,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 157,
								"claim_no_invoice": "555-081973-1-1709100756"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 38,
								"claim_no_invoice": "555-081973-1-1709100092"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 123.79,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.79,
								"claim_no_invoice": "555-233916-1-1709302292"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 190.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190.36,
								"claim_no_invoice": "555-235893-1-1709301668"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 169.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 169.48,
								"claim_no_invoice": "555-236143-1-1709301539"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 268.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 268.48,
								"claim_no_invoice": "555-236143-1-1709301869"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-236143-1-1709301595"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 246.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 246.74,
								"claim_no_invoice": "555-235893-1-1709301593"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 5148,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5148,
								"claim_no_invoice": "555-233916-1-1709000364"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-233916-1-1709000373"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-233916-1-1709000374"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 166.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.16,
								"claim_no_invoice": "555-233916-1-1709000379"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 228.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228.47,
								"claim_no_invoice": "555-234630-1-1707603147"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-30T00:00:00Z",
								"total_billing_audited": 1663,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1663,
								"claim_no_invoice": "555-081973-1-1708203825"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 217.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.47,
								"claim_no_invoice": "555-233916-1-1708200888"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-232663-1-1703703130"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-234630-1-1707603710"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-234363-1-1707600168"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.97,
								"claim_no_invoice": "555-233916-1-1707202544"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 2548,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2548,
								"claim_no_invoice": "555-234630-1-1707901553"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233916-1-1705800470"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233916-1-1706200401"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-17T00:00:00Z",
								"total_billing_audited": 370,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1707004254"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-212378-1-1626505115"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 431,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 431,
								"claim_no_invoice": "555-199043-1-1707004400"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 140.97,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233364-1-1706902105"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 214.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.92,
								"claim_no_invoice": "555-233364-1-1706902016"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 2289,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2289,
								"claim_no_invoice": "555-231958-1-1707200057"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 122.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 122.47,
								"claim_no_invoice": "555-231958-1-T126788464"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 6.33,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 6.33,
								"claim_no_invoice": "555-231718-1-T126788471"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 73.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 73.66,
								"claim_no_invoice": "555-231958-1-1705401987"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 107.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 107.04,
								"claim_no_invoice": "555-233916-1-T126788476"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 273.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 273.73,
								"claim_no_invoice": "555-233916-1-1705800472"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 56.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 56.73,
								"claim_no_invoice": "555-231958-1-1706600645"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 304.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 304.02,
								"claim_no_invoice": "555-234363-1-1706200402"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 24,
								"claim_no_invoice": "555-224573-1-1706300878"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 173.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 173.35,
								"claim_no_invoice": "555-233364-1-1705100459"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 172.58,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.58,
								"claim_no_invoice": "555-233916-1-1706200398"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 168.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 168.92,
								"claim_no_invoice": "555-233916-1-1706200399"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 4221.31,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1705804156"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 424.37,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 424.37,
								"claim_no_invoice": "555-233008-1-1704502546"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 130.21,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 130.21,
								"claim_no_invoice": "555-233008-1-1705100461"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233916-1-1706200401"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 1904,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1904,
								"claim_no_invoice": "555-081973-1-1705504122"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 288.59,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 288.59,
								"claim_no_invoice": "555-233916-1-1705800471"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.47,
								"claim_no_invoice": "555-233799-1-1705401408"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 214.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.81,
								"claim_no_invoice": "555-233364-1-1705800473"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-232663-1-1703703131"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 214.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 214.81,
								"claim_no_invoice": "555-233364-1-1705503590"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233364-1-1705503582"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233916-1-1705800470"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95,
								"claim_no_invoice": "555-220774-1-1704403854"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 416.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 416.74,
								"claim_no_invoice": "555-232663-1-1703703131"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 13.18,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 13.18,
								"claim_no_invoice": "555-206662-1-T126627457"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-220774-1-1704502945"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 143.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 143.26,
								"claim_no_invoice": "555-231958-1-1705102269"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-23T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.47,
								"claim_no_invoice": "555-206662-1-1704800180"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-23T00:00:00Z",
								"total_billing_audited": 98.45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 98.45,
								"claim_no_invoice": "555-233364-1-1704700033"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 100.21,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100.21,
								"claim_no_invoice": "555-233008-1-1704502536"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 181.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.82,
								"claim_no_invoice": "555-233364-1-1704800775"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 73.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 73.72,
								"claim_no_invoice": "555-217269-1-T126459585"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 142.39,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.39,
								"claim_no_invoice": "555-231958-1-1703401951"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233364-1-1704800769"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 142.39,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.39,
								"claim_no_invoice": "555-231958-1-1703001752"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 6.73,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220774-1-TM70341430"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-133188-1-1701200893"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 406.54,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 406.54,
								"claim_no_invoice": "555-231752-1-1702700448"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 303.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 303.02,
								"claim_no_invoice": "555-231211-1-1703201074"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 270.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270.74,
								"claim_no_invoice": "555-231718-1-1703200449"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-232663-1-1703703130"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.47,
								"claim_no_invoice": "555-231211-1-1703201047"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-06T00:00:00Z",
								"total_billing_audited": 90,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 90,
								"claim_no_invoice": "555-217269-1-1703100971"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-04T00:00:00Z",
								"total_billing_audited": 239.57,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 239.57,
								"claim_no_invoice": "555-231752-1-1702702910"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.47,
								"claim_no_invoice": "555-222847-1-1703001748"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-212378-1-1630500467"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 3743.18,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-TM70271308"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-02-01T00:00:00Z",
								"total_billing_audited": 221,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 221,
								"claim_no_invoice": "710-964274-1-1703000838"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 143.26,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231958-1-1703001755"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 306.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 306.62,
								"claim_no_invoice": "555-231752-1-1702702901"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-188781-1-1529304178"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 2380,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2380,
								"claim_no_invoice": "555-081973-1-1702001741"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220774-1-1636400759"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-25T00:00:00Z",
								"total_billing_audited": 219,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 219,
								"claim_no_invoice": "555-081973-1-1702002192"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-25T00:00:00Z",
								"total_billing_audited": 157,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 157,
								"claim_no_invoice": "555-081973-1-1702000890"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 906.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 906.74,
								"claim_no_invoice": "555-212378-1-1623602662"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96.47,
								"claim_no_invoice": "555-229672-1-1701303771"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 270.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270.74,
								"claim_no_invoice": "555-229672-1-1701303781"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 96.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-198525-1-1607400395"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1518902982"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 101.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 101.97,
								"claim_no_invoice": "555-206662-1-1634002405"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 147.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147.76,
								"claim_no_invoice": "555-225700-1-1634002394"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 235,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 235,
								"claim_no_invoice": "555-081973-1-1701102596"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-217300-1-1628003450"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207768-1-1632603082"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 230.5,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1620303408"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1627403041"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-147496-1-1616901140"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 1343,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-081973-1-1619501819"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-199043-1-1606002084"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-199043-1-1607400078"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-07T00:00:00Z",
								"total_billing_audited": 38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 38,
								"claim_no_invoice": "555-081973-1-1700403200"
							},
							{
								"benefit_st_nm": "Michigan",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-148235-1-1622306410"
							}
						]
					}
				},
				{
					"groupValue": "California",
					"doclist": {
						"numFound": 254,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 937.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 937.5,
								"claim_no_invoice": "572-000117-1-1717903975"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-002346-1-1710303401"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 291.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 291.91,
								"claim_no_invoice": "710-974901-1-1716402350"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 1377.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1377.68,
								"claim_no_invoice": "710-794808-1-1715202608"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 3750,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3750,
								"claim_no_invoice": "710-974901-1-1716302886"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-28T00:00:00Z",
								"total_billing_audited": 97.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.14,
								"claim_no_invoice": "710-926408-1-1715301938"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 147.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147.02,
								"claim_no_invoice": "572-006981-1-1717403155"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 482.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 482.97,
								"claim_no_invoice": "710-942125-1-1717402491"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 10.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10.5,
								"claim_no_invoice": "710-974901-1-T127894950"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 161.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 161.26,
								"claim_no_invoice": "572-001903-1-1717300219"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 17.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 17.02,
								"claim_no_invoice": "710-974901-1-T127894949"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 353.6,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-006416-1-1716800405"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 47.59,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1717100444"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 958.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 958.65,
								"claim_no_invoice": "710-794808-1-1715201668"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 120.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120.19,
								"claim_no_invoice": "572-001903-1-1717002000"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 1360.33,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1360.33,
								"claim_no_invoice": "710-974901-1-1717103195"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": -139.57,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-987918-1-1614802006"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100,
								"claim_no_invoice": "710-942125-1-1714501990"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 5887,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5887,
								"claim_no_invoice": "710-974901-1-1715600985"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 1625,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1625,
								"claim_no_invoice": "710-974901-1-1715601148"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 1200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1200,
								"claim_no_invoice": "710-942125-1-1713600134"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 19585,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 19585,
								"claim_no_invoice": "710-974901-1-1715600255"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 182.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-988947-1-1715302751"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 147.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147.38,
								"claim_no_invoice": "572-007657-1-1715802044"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "572-001903-1-1716002961"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 120.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120.19,
								"claim_no_invoice": "572-001903-1-1716002064"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 240.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240.38,
								"claim_no_invoice": "572-001903-1-1716002077"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 159.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159.31,
								"claim_no_invoice": "710-989848-1-1715700855"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 120.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120.19,
								"claim_no_invoice": "572-001903-1-1715901741"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 625,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1627900574"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 8.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 8.53,
								"claim_no_invoice": "572-001903-1-T127741039"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 350,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 350,
								"claim_no_invoice": "710-974901-1-1715600484"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": -625,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1627900574"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 44.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 44.88,
								"claim_no_invoice": "710-942125-1-1715701751"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 748.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 748.36,
								"claim_no_invoice": "710-987918-1-1715202557"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "572-001903-1-1715400473"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 350,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 350,
								"claim_no_invoice": "710-942125-1-1714303949"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 112.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.19,
								"claim_no_invoice": "572-003895-1-1715201661"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 70.03,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1715001794"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-03T00:00:00Z",
								"total_billing_audited": 311.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311.02,
								"claim_no_invoice": "710-973614-1-1713200492"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-988947-1-1706000425"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 159.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159.03,
								"claim_no_invoice": "572-003895-1-1714400858"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 732.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-003895-1-1713601133"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 216.71,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 216.71,
								"claim_no_invoice": "572-006981-1-1714602080"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-27T00:00:00Z",
								"total_billing_audited": 1326.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1326.91,
								"claim_no_invoice": "710-974901-1-1714503114"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 3151.65,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-001903-1-1714300036"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-988947-1-1714301817"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200,
								"claim_no_invoice": "710-942125-1-1714301590"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 120.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120.19,
								"claim_no_invoice": "572-001903-1-1714203826"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 82.95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 82.95,
								"claim_no_invoice": "572-001903-1-1714300020"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 112.14,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1713902798"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230,
								"claim_no_invoice": "572-000117-1-1713902152"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 57.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 57.73,
								"claim_no_invoice": "710-974901-1-T127568087"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 130.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 130.75,
								"claim_no_invoice": "710-989848-1-T127568128"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-20T00:00:00Z",
								"total_billing_audited": 450,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 450,
								"claim_no_invoice": "710-974901-1-1713900978"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 272.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 272.88,
								"claim_no_invoice": "572-002448-1-1712901301"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 588.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 588.19,
								"claim_no_invoice": "572-003895-1-1713601133"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 222.41,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 222.41,
								"claim_no_invoice": "710-989848-1-1713700880"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-17T00:00:00Z",
								"total_billing_audited": 183.17,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 183.17,
								"claim_no_invoice": "572-001903-1-1713201529"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-15T00:00:00Z",
								"total_billing_audited": 690,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 690,
								"claim_no_invoice": "572-000117-1-1713102097"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-15T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230,
								"claim_no_invoice": "572-000117-1-1713102250"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 620.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 620.62,
								"claim_no_invoice": "572-003895-1-1712901393"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-942125-1-1704002752"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-994739-1-1625204739"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 128.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128.1,
								"claim_no_invoice": "710-942125-1-1712901855"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 225.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 225.6,
								"claim_no_invoice": "710-942125-1-1710800149"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 5000,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5000,
								"claim_no_invoice": "710-974901-1-1712803559"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 184.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 184.48,
								"claim_no_invoice": "710-974901-1-1712900175"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-994739-1-1625805651"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-942125-1-1707300837"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 8.41,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 8.41,
								"claim_no_invoice": "572-001903-1-T127397696"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 300,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 300,
								"claim_no_invoice": "710-974901-1-1712401916"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-974901-1-1711702265"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 451,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 451,
								"claim_no_invoice": "572-001903-1-1712202570"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 112.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.19,
								"claim_no_invoice": "572-003895-1-1711801616"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 17.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1707100458"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 281.7,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1635801671"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 187.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300552"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 205.97,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300478"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 2228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2228,
								"claim_no_invoice": "710-988826-1-1711503035"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 128.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128.1,
								"claim_no_invoice": "710-942125-1-1712100751"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 221.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1701105875"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 78.21,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1711600732"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 53,
								"claim_no_invoice": "572-001903-1-1711702489"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 128.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128.1,
								"claim_no_invoice": "710-942125-1-1711700477"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 125,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 125,
								"claim_no_invoice": "710-942125-1-1711004414"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 237,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 237,
								"claim_no_invoice": "572-001903-1-1710901816"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 159.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159.31,
								"claim_no_invoice": "710-989848-1-1711002340"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "572-001903-1-1711501646"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 173,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 173,
								"claim_no_invoice": "710-942125-1-1711402635"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 112.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.47,
								"claim_no_invoice": "572-002346-1-1711001819"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 719.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 719.86,
								"claim_no_invoice": "710-974901-1-T127247959"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 12.77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 12.77,
								"claim_no_invoice": "710-989848-1-T127248010"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 8.11,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 8.11,
								"claim_no_invoice": "572-001903-1-T127248052"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 350,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 350,
								"claim_no_invoice": "710-974901-1-1710202475"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 218.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 218.25,
								"claim_no_invoice": "572-002346-1-1710303401"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100,
								"claim_no_invoice": "710-974901-1-1709600485"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 192.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192.51,
								"claim_no_invoice": "572-002346-1-1710700973"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 112.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.19,
								"claim_no_invoice": "572-003895-1-1710702776"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 128.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128.1,
								"claim_no_invoice": "710-942125-1-1710801774"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 128.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 128.1,
								"claim_no_invoice": "710-942125-1-1710701646"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 278.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 278.51,
								"claim_no_invoice": "710-974901-1-1710202563"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 121.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-000117-1-1709400594"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 195.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195.03,
								"claim_no_invoice": "572-003895-1-1710303522"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 209.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 209.43,
								"claim_no_invoice": "710-942125-1-1710001907"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 207,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 207,
								"claim_no_invoice": "710-995577-1-1708801235"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": -100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1702401321"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": -400,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1702702321"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "572-001903-1-1709600266"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 108.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 108.09,
								"claim_no_invoice": "572-000117-1-1709400594"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 49.95,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1709301475"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 22.29,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 22.29,
								"claim_no_invoice": "710-974901-1-1709402824"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 228.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228.64,
								"claim_no_invoice": "572-002346-1-1709302171"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 825.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 825.46,
								"claim_no_invoice": "710-973614-1-1708203313"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 294,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 294,
								"claim_no_invoice": "710-988826-1-1708700473"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 337.71,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 337.71,
								"claim_no_invoice": "710-974901-1-1708200309"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1701105875"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300552"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1635801671"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300478"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 190,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190,
								"claim_no_invoice": "710-988826-1-1708700472"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-04-01T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-974901-1-1708104186"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708601386"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1700200355"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-988826-1-1708700471"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708601870"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708602130"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708603349"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708602617"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708302395"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708602519"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708601932"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 112.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.19,
								"claim_no_invoice": "572-002448-1-1708601035"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-974901-1-1708104188"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 71.25,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708200653"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 177,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 177,
								"claim_no_invoice": "572-000245-1-1707904596"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 546,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 546,
								"claim_no_invoice": "572-000245-1-1708104013"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 53.62,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708201180"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 510.17,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 510.17,
								"claim_no_invoice": "710-994739-1-1622500746"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 704,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 704,
								"claim_no_invoice": "572-000245-1-1707904220"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708002032"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708003304"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 190.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190.96,
								"claim_no_invoice": "572-002346-1-1708104563"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100647"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 725.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 725.43,
								"claim_no_invoice": "710-974901-1-T126937338"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100431"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100623"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100509"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100702"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 190.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 190.96,
								"claim_no_invoice": "572-002346-1-1708104562"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 140,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-988826-1-1708003850"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": -510.17,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-994739-1-1622500746"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1708100705"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 830,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 830,
								"claim_no_invoice": "710-988826-1-1708002190"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 48.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1707601435"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 400,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 400,
								"claim_no_invoice": "710-974901-1-1706103479"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 162.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 162.68,
								"claim_no_invoice": "572-002448-1-1707600258"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 94.95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.95,
								"claim_no_invoice": "555-223179-1-1707300240"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 990,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 990,
								"claim_no_invoice": "710-995577-1-1707501587"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 72.39,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1707302281"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 175.5,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1707302314"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 159.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159.31,
								"claim_no_invoice": "710-942125-1-1707300837"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 105.49,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1707302323"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "572-001903-1-1707400110"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 3570,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-001903-1-1705402187"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 515,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 515,
								"claim_no_invoice": "710-974901-1-1707003731"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200,
								"claim_no_invoice": "572-001903-1-1707000992"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 57.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 57.03,
								"claim_no_invoice": "555-223179-1-1707000871"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 145,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 145,
								"claim_no_invoice": "710-974901-1-1707003715"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 140.06,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140.06,
								"claim_no_invoice": "555-223179-1-1707000873"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 10.79,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10.79,
								"claim_no_invoice": "710-974901-1-T126789803"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 8.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 8.66,
								"claim_no_invoice": "572-000117-1-T126789636"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 27.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 27.6,
								"claim_no_invoice": "572-001903-1-TS26789871"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 244.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 244.53,
								"claim_no_invoice": "572-002346-1-1706500462"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 17.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 17.49,
								"claim_no_invoice": "572-002346-1-T126789629"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-11T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "710-989848-1-1706801533"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-11T00:00:00Z",
								"total_billing_audited": 251.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.91,
								"claim_no_invoice": "710-974901-1-1705800145"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 223.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 223.43,
								"claim_no_invoice": "572-002346-1-1705803440"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 620,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 620,
								"claim_no_invoice": "710-988947-1-1706104540"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 196.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 196.8,
								"claim_no_invoice": "572-002346-1-1705803441"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 325.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 325.23,
								"claim_no_invoice": "572-000117-1-1706005482"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 150.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150.92,
								"claim_no_invoice": "572-000117-1-1706005418"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 337.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 337.86,
								"claim_no_invoice": "710-974901-1-1705903155"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 168.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 168.91,
								"claim_no_invoice": "572-002346-1-1705803443"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 800,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 800,
								"claim_no_invoice": "710-988947-1-1706104513"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 180.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 180.22,
								"claim_no_invoice": "572-002346-1-1706500463"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 160,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 160,
								"claim_no_invoice": "710-988947-1-1705900147"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 520,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 520,
								"claim_no_invoice": "572-000117-1-1706003516"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 130.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 130.35,
								"claim_no_invoice": "572-002346-1-1706200080"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "710-989848-1-1705504147"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 230.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230.63,
								"claim_no_invoice": "572-000117-1-1705902733"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 79.95,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1705504236"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 1643.32,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1643.32,
								"claim_no_invoice": "710-988947-1-1706000425"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 282.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 282.92,
								"claim_no_invoice": "710-998321-1-1704500016"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 251.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.91,
								"claim_no_invoice": "710-974901-1-1704803115"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 12.77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 12.77,
								"claim_no_invoice": "710-989848-1-T126629141"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 10.69,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10.69,
								"claim_no_invoice": "572-000117-1-T126628887"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 711.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 711.64,
								"claim_no_invoice": "710-974901-1-T126629080"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 9.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 9.67,
								"claim_no_invoice": "572-000245-1-T126629339"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 199.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 199.4,
								"claim_no_invoice": "710-942125-1-1704700964"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "572-000117-1-1704000492"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 17.56,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 17.56,
								"claim_no_invoice": "572-000245-1-T126461529"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 182.15,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 182.15,
								"claim_no_invoice": "710-994739-1-1703903683"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 724.57,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 724.57,
								"claim_no_invoice": "710-974901-1-1704606616"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 267.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 267.72,
								"claim_no_invoice": "555-231559-1-1703300878"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-973614-1-1704003758"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 879.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 879.02,
								"claim_no_invoice": "710-973614-1-1704403521"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 110,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 110,
								"claim_no_invoice": "710-974901-1-1704501433"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 2432,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2432,
								"claim_no_invoice": "710-942125-1-1704002752"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 238.01,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 238.01,
								"claim_no_invoice": "572-000117-1-1703402213"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 20.28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.28,
								"claim_no_invoice": "572-000245-1-TS26461528"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "710-989848-1-1703403892"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 19.56,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 19.56,
								"claim_no_invoice": "555-231559-1-TS26461050"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 400,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 400,
								"claim_no_invoice": "710-974901-1-1702702321"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100,
								"claim_no_invoice": "710-974901-1-1702401321"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 266.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266.09,
								"claim_no_invoice": "572-000117-1-1703300910"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 138,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 138,
								"claim_no_invoice": "710-973614-1-1703202893"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 38.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 38.68,
								"claim_no_invoice": "710-973614-1-1703301682"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 1923.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1923.16,
								"claim_no_invoice": "555-223179-1-1701302010"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "555-231559-1-1703300858"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-06T00:00:00Z",
								"total_billing_audited": 622.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 622.36,
								"claim_no_invoice": "572-000117-1-1703202035"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-04T00:00:00Z",
								"total_billing_audited": 739.77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 739.77,
								"claim_no_invoice": "710-998321-1-1701601866"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100,
								"claim_no_invoice": "710-974901-1-1700200355"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 400,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 400,
								"claim_no_invoice": "710-974901-1-1636501371"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974901-1-1631503267"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 107.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 107.03,
								"claim_no_invoice": "555-231559-1-1702702832"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 151.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.63,
								"claim_no_invoice": "710-989848-1-1701800750"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 268,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 268,
								"claim_no_invoice": "710-988826-1-1702501071"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 148,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148,
								"claim_no_invoice": "710-988826-1-1702501532"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 350,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 350,
								"claim_no_invoice": "710-974901-1-1702403434"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 148,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148,
								"claim_no_invoice": "710-988826-1-1702503036"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 119,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 119,
								"claim_no_invoice": "710-988826-1-1702503029"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 148,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148,
								"claim_no_invoice": "710-988826-1-1702501632"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 148,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148,
								"claim_no_invoice": "710-988826-1-1702501635"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 225,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-998321-1-1701802511"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-25T00:00:00Z",
								"total_billing_audited": 184.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 184.48,
								"claim_no_invoice": "710-974901-1-1702402011"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300478"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1700300552"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1635801671"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 646.32,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 646.32,
								"claim_no_invoice": "710-974901-1-T126284991"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 199.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 199.4,
								"claim_no_invoice": "710-942125-1-1701703155"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228215-1-1701105875"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 362,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-973614-1-1701103008"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 1912.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1912.35,
								"claim_no_invoice": "555-223179-1-1634202676"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "710-988947-1-1700402868"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 1923.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1923.16,
								"claim_no_invoice": "555-223179-1-1634300686"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 2422.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2422.35,
								"claim_no_invoice": "555-223179-1-1634102454"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 184.5,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-988947-1-1636300570"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 2012.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2012.35,
								"claim_no_invoice": "555-223179-1-1634300685"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 22.29,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 22.29,
								"claim_no_invoice": "710-974901-1-1701200573"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-973614-1-1620803392"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 139.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 139.49,
								"claim_no_invoice": "555-221534-1-1700602553"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-04T00:00:00Z",
								"total_billing_audited": 202.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 202.6,
								"claim_no_invoice": "710-989537-1-1633600560"
							},
							{
								"benefit_st_nm": "California",
								"process_dt": "2017-01-04T00:00:00Z",
								"total_billing_audited": 302.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 302.88,
								"claim_no_invoice": "710-989537-1-1633600373"
							}
						]
					}
				},
				{
					"groupValue": "South Carolina",
					"doclist": {
						"numFound": 30,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 380,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-217808-1-1636202624"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-187000-1-1601305939"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-06-10T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-217808-1-TM63221077"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 146,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146,
								"claim_no_invoice": "555-217808-1-1712300603"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218197-1-1634702407"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 162.78,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 162.78,
								"claim_no_invoice": "555-236827-1-1711400747"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 564.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 564.67,
								"claim_no_invoice": "555-217808-1-1710402783"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 130.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 130.62,
								"claim_no_invoice": "555-217808-1-1710303472"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 23.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 23.12,
								"claim_no_invoice": "555-217808-1-1710303496"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 42.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 42.19,
								"claim_no_invoice": "555-217808-1-1710303485"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 23.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 23.12,
								"claim_no_invoice": "555-217808-1-1710303481"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 56.3,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 56.3,
								"claim_no_invoice": "555-217808-1-T127096634"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 28,
								"claim_no_invoice": "555-217808-1-1707202193"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-18T00:00:00Z",
								"total_billing_audited": 84.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 84.38,
								"claim_no_invoice": "555-217808-1-1707202147"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-18T00:00:00Z",
								"total_billing_audited": 983.42,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 983.42,
								"claim_no_invoice": "555-217808-1-1707202235"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-18T00:00:00Z",
								"total_billing_audited": 28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 28,
								"claim_no_invoice": "555-217808-1-1707202200"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-18T00:00:00Z",
								"total_billing_audited": 224.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 224.76,
								"claim_no_invoice": "555-217808-1-1707202217"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 210.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210.09,
								"claim_no_invoice": "555-233131-1-1706002062"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 218.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 218.75,
								"claim_no_invoice": "555-217808-1-1704403915"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 656.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 656.25,
								"claim_no_invoice": "555-217808-1-1704403910"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-20T00:00:00Z",
								"total_billing_audited": 101.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 101.64,
								"claim_no_invoice": "555-217808-1-T126450292"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 125.76,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-217808-1-TM70391252"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 146,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146,
								"claim_no_invoice": "555-217808-1-1703904285"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 300,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 300,
								"claim_no_invoice": "555-218197-1-1701902267"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "555-217808-1-1703101621"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-02-01T00:00:00Z",
								"total_billing_audited": 40,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 40,
								"claim_no_invoice": "555-217808-1-1703101620"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-176868-1-1602603112"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 297.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 297.81,
								"claim_no_invoice": "555-222300-1-1701103669"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 389,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 389,
								"claim_no_invoice": "555-217808-1-1700900019"
							},
							{
								"benefit_st_nm": "South Carolina",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 52.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 52.92,
								"claim_no_invoice": "555-217808-1-T126139905"
							}
						]
					}
				},
				{
					"groupValue": "New Jersey",
					"doclist": {
						"numFound": 44,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 700,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 700,
								"claim_no_invoice": "555-235707-1-1718001269"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 1400,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1400,
								"claim_no_invoice": "555-235707-1-1717403665"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 540,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 540,
								"claim_no_invoice": "555-235707-1-1717301249"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 352,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 352,
								"claim_no_invoice": "555-235707-1-1717101504"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 465,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 465,
								"claim_no_invoice": "555-235707-1-1717100077"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 465,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 465,
								"claim_no_invoice": "555-235707-1-1717101499"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 465,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 465,
								"claim_no_invoice": "555-235707-1-1717100080"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 8805,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 8805,
								"claim_no_invoice": "555-235707-1-1715101182"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 182.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 182.23,
								"claim_no_invoice": "555-235707-1-1716500111"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 120,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120,
								"claim_no_invoice": "555-235707-1-1716002049"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 900,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 900,
								"claim_no_invoice": "555-235707-1-1716502481"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 20.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.86,
								"claim_no_invoice": "555-231872-1-T127737393"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 1193,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1193,
								"claim_no_invoice": "555-235707-1-1715301402"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-190588-1-1610101582"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-27T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-238067-1-1714200462"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 2500,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235707-1-1713802842"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 142.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.25,
								"claim_no_invoice": "555-238067-1-1712800740"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 95.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.63,
								"claim_no_invoice": "555-238067-1-1712800398"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-24T00:00:00Z",
								"total_billing_audited": 700,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 700,
								"claim_no_invoice": "555-235707-1-1714301524"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-20T00:00:00Z",
								"total_billing_audited": 321,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 321,
								"claim_no_invoice": "555-235707-1-1713702246"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 700,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 700,
								"claim_no_invoice": "555-235707-1-1713801774"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 700,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 700,
								"claim_no_invoice": "555-235707-1-1713801783"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-17T00:00:00Z",
								"total_billing_audited": 417.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 417.5,
								"claim_no_invoice": "555-235707-1-1713502830"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 81.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 81.81,
								"claim_no_invoice": "555-235707-1-T127394588"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 2278.45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2278.45,
								"claim_no_invoice": "555-231872-1-1712200539"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 410.9,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 410.9,
								"claim_no_invoice": "555-235707-1-1711700068"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 471.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 471.5,
								"claim_no_invoice": "555-235707-1-1710701492"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 82.91,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235707-1-TM71031154"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45,
								"claim_no_invoice": "555-231872-1-1710100064"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 264.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 264.1,
								"claim_no_invoice": "555-235707-1-1709703781"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 838.01,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 838.01,
								"claim_no_invoice": "555-235707-1-1709703782"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 460.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 460.76,
								"claim_no_invoice": "555-235707-1-1709300193"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 264.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 264.1,
								"claim_no_invoice": "555-235707-1-1709300383"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 546.34,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 546.34,
								"claim_no_invoice": "555-235707-1-1709300280"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 126.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 126.93,
								"claim_no_invoice": "555-231872-1-T126786818"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 992,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 992,
								"claim_no_invoice": "555-231872-1-1706203519"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 118,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 118,
								"claim_no_invoice": "555-214129-1-1704801968"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 1150.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1150.55,
								"claim_no_invoice": "555-231872-1-1703401717"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-20T00:00:00Z",
								"total_billing_audited": 20.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.86,
								"claim_no_invoice": "555-231872-1-T126457441"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-18T00:00:00Z",
								"total_billing_audited": 182.23,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231872-1-1703401991"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 264.1,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231872-1-1703401718"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 182.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 182.23,
								"claim_no_invoice": "555-231872-1-1702700808"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 182.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 182.23,
								"claim_no_invoice": "555-231872-1-1703001661"
							},
							{
								"benefit_st_nm": "New Jersey",
								"process_dt": "2017-02-01T00:00:00Z",
								"total_billing_audited": 379.33,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 379.33,
								"claim_no_invoice": "555-231872-1-1702601673"
							}
						]
					}
				},
				{
					"groupValue": "Colorado",
					"doclist": {
						"numFound": 196,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 82.1,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1712901576"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1717700556"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 611.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1716303733"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 1440,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-TM71721193"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 77.1,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 77.1,
								"claim_no_invoice": "555-228887-1-T127896182"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 19.32,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 19.32,
								"claim_no_invoice": "555-228887-1-T127896217"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 1406.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1406.72,
								"claim_no_invoice": "710-986475-1-T127896196"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-24T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "555-228887-1-1717201917"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 457.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 457.94,
								"claim_no_invoice": "572-009510-1-1716701605"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 355,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 355,
								"claim_no_invoice": "710-972645-1-1716701483"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 152.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 152.64,
								"claim_no_invoice": "555-228887-1-1717001479"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 158.37,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 158.37,
								"claim_no_invoice": "555-228887-1-1716000489"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-17T00:00:00Z",
								"total_billing_audited": 988.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 988.68,
								"claim_no_invoice": "710-972645-1-1716303733"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1716400667"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 152.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 152.64,
								"claim_no_invoice": "555-228887-1-1716400232"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 152.64,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 152.64,
								"claim_no_invoice": "555-228887-1-1716400238"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 103.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 103.67,
								"claim_no_invoice": "710-986475-1-1716100926"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 179,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 179,
								"claim_no_invoice": "710-972645-1-1716100879"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 57.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 57.66,
								"claim_no_invoice": "555-228887-1-T127742234"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 183.89,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 183.89,
								"claim_no_invoice": "710-986475-1-1715804208"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200,
								"claim_no_invoice": "710-972645-1-1715000046"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "555-228887-1-1715602038"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1715301378"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 149.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 149.76,
								"claim_no_invoice": "555-228887-1-1715602449"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 86.54,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 86.54,
								"claim_no_invoice": "572-002392-1-1714203148"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 164.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164.03,
								"claim_no_invoice": "572-002392-1-1714203147"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-03T00:00:00Z",
								"total_billing_audited": 231.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 231.62,
								"claim_no_invoice": "710-986475-1-1715100792"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1715000027"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 149.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 149.76,
								"claim_no_invoice": "555-228887-1-1715100178"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-31T00:00:00Z",
								"total_billing_audited": 146.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.88,
								"claim_no_invoice": "555-228887-1-1715000028"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1714401388"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1714502172"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1714401396"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 746.09,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-TM71431192"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 47,
								"claim_no_invoice": "572-002392-1-1714203143"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "572-002392-1-1714203150"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 780.66,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-TM71431130"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-24T00:00:00Z",
								"total_billing_audited": 74.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 74.88,
								"claim_no_invoice": "572-002392-1-1714203146"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 146.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.88,
								"claim_no_invoice": "555-228887-1-1714200680"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 144,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 144,
								"claim_no_invoice": "555-228887-1-1714200677"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 148.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148.85,
								"claim_no_invoice": "555-228887-1-1714200065"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 109.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 109.44,
								"claim_no_invoice": "555-228887-1-1714200273"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 176,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 176,
								"claim_no_invoice": "710-972645-1-1713800058"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 14.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 14.82,
								"claim_no_invoice": "555-228887-1-T127569424"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 4.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 4.93,
								"claim_no_invoice": "555-228887-1-T127569384"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-20T00:00:00Z",
								"total_billing_audited": 2362,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2362,
								"claim_no_invoice": "710-972645-1-1713200252"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 2998,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2998,
								"claim_no_invoice": "710-972645-1-1713701009"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1712800575"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1708602207"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "555-228887-1-1712800770"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 120.99,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 120.99,
								"claim_no_invoice": "572-005718-1-1712902687"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 111,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 111,
								"claim_no_invoice": "710-972645-1-1713101777"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 435.72,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1712901576"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 201,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 201,
								"claim_no_invoice": "710-972645-1-1712800555"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 58292,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 58292,
								"claim_no_invoice": "555-228887-1-1711003413"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1618601379"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1712300041"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1712300119"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 37.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 37.22,
								"claim_no_invoice": "555-228887-1-T127398843"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 1285.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1285.38,
								"claim_no_invoice": "710-986475-1-T127398815"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "555-228887-1-1712101083"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 260,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 260,
								"claim_no_invoice": "710-986475-1-1711701359"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1711701095"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 172.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.38,
								"claim_no_invoice": "555-228887-1-1711701118"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 144,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 144,
								"claim_no_invoice": "555-228887-1-1711601087"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1711400109"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 377.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 377.4,
								"claim_no_invoice": "572-005718-1-1711003572"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 198.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 198.6,
								"claim_no_invoice": "572-005718-1-1711003250"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 852.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 852.48,
								"claim_no_invoice": "710-986475-1-T127249202"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 22.39,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 22.39,
								"claim_no_invoice": "555-228887-1-T127249222"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-21T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1710800038"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 492.41,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 492.41,
								"claim_no_invoice": "710-986475-1-1710703423"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1709401884"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 192,
								"claim_no_invoice": "710-972645-1-1710401474"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 97.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.5,
								"claim_no_invoice": "555-228887-1-1710701962"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 117.01,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 117.01,
								"claim_no_invoice": "555-228887-1-1710205082"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228887-1-1702700137"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1710103771"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 92.85,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228887-1-TM71021074"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 1200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1200,
								"claim_no_invoice": "710-986475-1-1710200094"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 146.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.88,
								"claim_no_invoice": "555-228887-1-1710300913"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 746.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 746.09,
								"claim_no_invoice": "710-986475-1-1708602207"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 134.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.94,
								"claim_no_invoice": "555-228887-1-1710103299"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 172.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 172.38,
								"claim_no_invoice": "555-228887-1-1710103769"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 111.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 111.74,
								"claim_no_invoice": "555-228887-1-1708801917"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 389.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 389.88,
								"claim_no_invoice": "710-986475-1-1709601910"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1709400460"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 20.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.23,
								"claim_no_invoice": "555-228887-1-T127096281"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 428.24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 428.24,
								"claim_no_invoice": "710-986475-1-T127096251"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 16.99,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 16.99,
								"claim_no_invoice": "555-228887-1-T127096282"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 93.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 93.65,
								"claim_no_invoice": "710-972645-1-1709401884"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 198,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 198,
								"claim_no_invoice": "710-986475-1-1708900568"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "555-228887-1-1709400462"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "555-228887-1-1709000328"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 159,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159,
								"claim_no_invoice": "710-972645-1-1709100432"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 132.06,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 132.06,
								"claim_no_invoice": "555-228887-1-1709400451"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 97.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.5,
								"claim_no_invoice": "555-228887-1-1709400463"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 2565,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2565,
								"claim_no_invoice": "555-228887-1-1707202561"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-04-01T00:00:00Z",
								"total_billing_audited": 94.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.62,
								"claim_no_invoice": "555-228887-1-1709000327"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-30T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1707603165"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1708105851"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1707000306"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 134.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.44,
								"claim_no_invoice": "555-228887-1-1708200829"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1706500770"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 34.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 34.02,
								"claim_no_invoice": "710-986475-1-T126938729"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 14.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 14.82,
								"claim_no_invoice": "555-228887-1-T126938758"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 20.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.23,
								"claim_no_invoice": "555-228887-1-T126938757"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 84.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 84.51,
								"claim_no_invoice": "710-972645-1-T126938725"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 137.82,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 137.82,
								"claim_no_invoice": "555-228887-1-1708105855"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1706901680"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1706902226"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 5484,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 5484,
								"claim_no_invoice": "555-228887-1-1706903183"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1707603165"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1706500694"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 546,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 546,
								"claim_no_invoice": "555-228887-1-1707600677"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 546,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 546,
								"claim_no_invoice": "555-228887-1-1707600672"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 327.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 327.66,
								"claim_no_invoice": "710-986475-1-1707400147"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1707000306"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 291.56,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230161-1-1706102177"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1706902018"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 69,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 69,
								"claim_no_invoice": "555-228887-1-1706903631"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 728.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 728.14,
								"claim_no_invoice": "555-228887-1-1707203619"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 126.71,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1706104818"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 124.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1705900960"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1706902226"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 261.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1705802839"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1705902590"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1706901680"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 146.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1705804616"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 9.2,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228887-1-TM70671077"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 350,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 350,
								"claim_no_invoice": "710-986475-1-T126790992"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "572-002392-1-1706502710"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 227.84,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.84,
								"claim_no_invoice": "555-228887-1-T126790928"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 20.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 20.66,
								"claim_no_invoice": "555-228887-1-T126790923"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 1280.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1280.72,
								"claim_no_invoice": "710-986475-1-T126790940"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 47,
								"claim_no_invoice": "572-002392-1-1706502728"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 31,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228887-1-TM70671075"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1706500694"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 151.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.4,
								"claim_no_invoice": "572-002392-1-1706502723"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 145.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1705403531"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 108.71,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1705403529"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 202.58,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 202.58,
								"claim_no_invoice": "555-228887-1-1706200237"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 459.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 459.44,
								"claim_no_invoice": "555-230161-1-1706102177"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 99.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228887-1-1636200191"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 419.29,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 419.29,
								"claim_no_invoice": "710-986475-1-1706104818"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 1201,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1201,
								"claim_no_invoice": "555-228887-1-1706004708"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1705902590"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 45.65,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.65,
								"claim_no_invoice": "710-972645-1-1705804616"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 335.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 335.6,
								"claim_no_invoice": "710-986475-1-1705900960"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 184.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 184.08,
								"claim_no_invoice": "710-986475-1-1705802839"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "555-228887-1-1705804276"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 83.29,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 83.29,
								"claim_no_invoice": "710-972645-1-1705403529"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 146.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1704603019"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 94.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.81,
								"claim_no_invoice": "710-972645-1-1705403531"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "555-230161-1-1705100591"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-25T00:00:00Z",
								"total_billing_audited": 162.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1703301842"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 856.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 856.48,
								"claim_no_invoice": "710-986475-1-T126462685"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 53.28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 53.28,
								"claim_no_invoice": "710-972645-1-1704603019"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-974008-1-1614702458"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 228.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228.62,
								"claim_no_invoice": "710-995425-1-1704502528"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 30.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 30.53,
								"claim_no_invoice": "710-972645-1-1703301842"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 4450,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1702403487"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "555-230161-1-1704001364"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 7200,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-972645-1-1701905073"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 320.78,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320.78,
								"claim_no_invoice": "555-228887-1-1703902874"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 327.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 327.66,
								"claim_no_invoice": "710-986475-1-1703800573"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "555-228887-1-1702700142"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 151.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 151.6,
								"claim_no_invoice": "710-972645-1-1702504447"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 102.91,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 102.91,
								"claim_no_invoice": "555-228887-1-1701701858"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 171,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-TM70381094"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 10838,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10838,
								"claim_no_invoice": "710-986475-1-1701902372"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 34894.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 34894.86,
								"claim_no_invoice": "710-972645-1-1700601203"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-06T00:00:00Z",
								"total_billing_audited": 1240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1240,
								"claim_no_invoice": "710-986475-1-1702700312"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-04T00:00:00Z",
								"total_billing_audited": 59.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 59.66,
								"claim_no_invoice": "555-228887-1-1700300395"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 232.54,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 232.54,
								"claim_no_invoice": "555-228887-1-1702700137"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 150,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 150,
								"claim_no_invoice": "555-230161-1-1702600459"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-25T00:00:00Z",
								"total_billing_audited": 146.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.96,
								"claim_no_invoice": "710-972645-1-1634700603"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 312,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 312,
								"claim_no_invoice": "555-230161-1-1701802106"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 400.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 400.48,
								"claim_no_invoice": "710-986475-1-T126286302"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 61.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 61.38,
								"claim_no_invoice": "710-986475-1-T126286303"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 236.11,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 236.11,
								"claim_no_invoice": "710-972645-1-1701702825"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 2465,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2465,
								"claim_no_invoice": "710-972645-1-1701002663"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 184.71,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-986475-1-1615400544"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 3838,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3838,
								"claim_no_invoice": "710-972645-1-1700901344"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 1192,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1192,
								"claim_no_invoice": "710-972645-1-1700901457"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 602,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 602,
								"claim_no_invoice": "710-986475-1-1700601850"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 432.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 432.14,
								"claim_no_invoice": "710-986475-1-T126139545"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-06T00:00:00Z",
								"total_billing_audited": 194,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 194,
								"claim_no_invoice": "555-221612-1-1700201034"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-05T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-995425-1-1623200836"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-04T00:00:00Z",
								"total_billing_audited": 168.61,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 168.61,
								"claim_no_invoice": "555-228887-1-1700300243"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-04T00:00:00Z",
								"total_billing_audited": 480.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 480.36,
								"claim_no_invoice": "710-986475-1-1636500627"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 159,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 159,
								"claim_no_invoice": "710-972645-1-1636402803"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 523.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 523.09,
								"claim_no_invoice": "710-986475-1-1636500235"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 47,
								"claim_no_invoice": "555-228887-1-1636200195"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 147.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147.93,
								"claim_no_invoice": "555-228887-1-1636200190"
							},
							{
								"benefit_st_nm": "Colorado",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 129.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 129.8,
								"claim_no_invoice": "555-228887-1-1636200191"
							}
						]
					}
				},
				{
					"groupValue": "Nevada",
					"doclist": {
						"numFound": 84,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 1227,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1227,
								"claim_no_invoice": "555-229869-1-1716601986"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 101,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 101,
								"claim_no_invoice": "555-229869-1-1716600525"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 271.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 271.62,
								"claim_no_invoice": "555-229869-1-1714200508"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 196.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 196.92,
								"claim_no_invoice": "555-229869-1-1716301445"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 34.05,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 34.05,
								"claim_no_invoice": "555-229869-1-T127742415"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 36.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 36.08,
								"claim_no_invoice": "710-968923-1-T127742413"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-968923-1-1715602182"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 175.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 175.04,
								"claim_no_invoice": "555-229869-1-1715600907"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 10000,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10000,
								"claim_no_invoice": "710-968923-1-1713902672"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 153.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 153.16,
								"claim_no_invoice": "555-229869-1-1714600090"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-30T00:00:00Z",
								"total_billing_audited": 175.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 175.04,
								"claim_no_invoice": "555-229869-1-1714600091"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1706700413"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 712.5,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 712.5,
								"claim_no_invoice": "710-968923-1-1713902050"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 207.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 207.86,
								"claim_no_invoice": "555-229869-1-1713801560"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 4895,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 4895,
								"claim_no_invoice": "555-229869-1-1713602134"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 207.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 207.86,
								"claim_no_invoice": "555-229869-1-1713500518"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 284.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284.44,
								"claim_no_invoice": "555-229869-1-1713501715"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 2000,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2000,
								"claim_no_invoice": "710-968923-1-1713100538"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 714.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 714.36,
								"claim_no_invoice": "555-229869-1-1712803647"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 3384,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3384,
								"claim_no_invoice": "555-229869-1-1712501741"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 118.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 118.8,
								"claim_no_invoice": "555-229869-1-1712803648"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 2076,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2076,
								"claim_no_invoice": "710-968923-1-1712500632"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 96,
								"claim_no_invoice": "555-229869-1-1712801119"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 36.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 36.08,
								"claim_no_invoice": "710-968923-1-T127398968"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 284.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284.44,
								"claim_no_invoice": "555-229869-1-1712401531"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 229.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.74,
								"claim_no_invoice": "555-229869-1-1712101113"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 1215,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1215,
								"claim_no_invoice": "555-229869-1-1711702958"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1705200472"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1711700074"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1711701206"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 229.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.74,
								"claim_no_invoice": "555-229869-1-1711601106"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-968923-1-1711004300"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1710703547"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1710701522"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 229.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.74,
								"claim_no_invoice": "555-229869-1-1710701524"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1710103382"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 229.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.74,
								"claim_no_invoice": "555-229869-1-1710101310"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1709703785"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 36.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 36.08,
								"claim_no_invoice": "710-968923-1-T127096420"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 1293.91,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-995991-1-1709500921"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 229.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 229.74,
								"claim_no_invoice": "555-229869-1-1709301749"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 9768,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 9768,
								"claim_no_invoice": "555-229869-1-1708701062"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 445.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 445.31,
								"claim_no_invoice": "555-229869-1-1708801505"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 251.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 251.62,
								"claim_no_invoice": "555-229869-1-1709000425"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-04-01T00:00:00Z",
								"total_billing_audited": 67.48,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70871580"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 34.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 34.14,
								"claim_no_invoice": "555-229869-1-T126938911"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 41.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 41.75,
								"claim_no_invoice": "555-229869-1-T126938910"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 116,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 116,
								"claim_no_invoice": "555-229869-1-1708201356"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 465.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 465.72,
								"claim_no_invoice": "555-229869-1-1706700413"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-17T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-999126-1-1700505536"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-968923-1-1706701327"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 67.48,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70601430"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 35.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 35.68,
								"claim_no_invoice": "710-968923-1-T126630688"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 98.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 98.46,
								"claim_no_invoice": "555-229869-1-1705200472"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 2236.3,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2236.3,
								"claim_no_invoice": "555-229869-1-1704700867"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 163.24,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70441269"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 101.44,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70441329"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 59.59,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70441186"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 77.15,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 77.15,
								"claim_no_invoice": "555-229869-1-1704001128"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 147.69,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147.69,
								"claim_no_invoice": "555-229869-1-1703901771"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 177,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 177,
								"claim_no_invoice": "710-995991-1-1703903107"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 189.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 189.72,
								"claim_no_invoice": "555-229869-1-1704001106"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-968923-1-1703801813"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 259.7,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 259.7,
								"claim_no_invoice": "555-229869-1-1701903096"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-03T00:00:00Z",
								"total_billing_audited": 129.24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 129.24,
								"claim_no_invoice": "555-229869-1-1703200953"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 94.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.86,
								"claim_no_invoice": "555-229869-1-1703200935"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 231.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 231.88,
								"claim_no_invoice": "555-229869-1-1703103051"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 144,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-968923-1-1613603382"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 1980,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-968923-1-1613603378"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 305.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701202366"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 94.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701800317"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 94.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701202360"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 189.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701800312"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 35.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 35.68,
								"claim_no_invoice": "710-968923-1-T126286457"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701202366"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701800312"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701202360"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-1701800317"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 240,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 240,
								"claim_no_invoice": "710-968923-1-1701800871"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 542.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 542.98,
								"claim_no_invoice": "710-999126-1-1700505536"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 10500,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 10500,
								"claim_no_invoice": "710-968923-1-1633501269"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 229.78,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229869-1-TM70111005"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 7.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 7.02,
								"claim_no_invoice": "710-995991-1-1701106593"
							},
							{
								"benefit_st_nm": "Nevada",
								"process_dt": "2017-01-06T00:00:00Z",
								"total_billing_audited": 2076,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2076,
								"claim_no_invoice": "710-968923-1-1633400896"
							}
						]
					}
				},
				{
					"groupValue": "North Carolina",
					"doclist": {
						"numFound": 26,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 145.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 145.94,
								"claim_no_invoice": "555-237926-1-1714400365"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 99.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 99.02,
								"claim_no_invoice": "555-237926-1-1715601714"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-237926-1-1713600506"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "709-776776-1-1704500639"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 88.78,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 88.78,
								"claim_no_invoice": "555-237926-1-1714400367"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "709-776776-1-1708001811"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 203.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 203.26,
								"claim_no_invoice": "555-237926-1-1713501856"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": 198.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 198.6,
								"claim_no_invoice": "555-237926-1-1713600509"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-04-12T00:00:00Z",
								"total_billing_audited": 145.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 145.94,
								"claim_no_invoice": "555-233911-1-1708802140"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 174.32,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 174.32,
								"claim_no_invoice": "555-233911-1-1708303327"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 2278.19,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2278.19,
								"claim_no_invoice": "555-215153-1-1708202010"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 145.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 145.94,
								"claim_no_invoice": "555-233911-1-1707904352"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 174.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 174.43,
								"claim_no_invoice": "555-233911-1-1708200838"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 508,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 508,
								"claim_no_invoice": "709-776776-1-1708001811"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 133.28,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 133.28,
								"claim_no_invoice": "555-233911-1-1707904370"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 129.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 129.93,
								"claim_no_invoice": "555-233911-1-1707901693"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 99.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 99.02,
								"claim_no_invoice": "555-233911-1-1707202526"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 195.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195.36,
								"claim_no_invoice": "555-233911-1-1707202516"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 508,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 508,
								"claim_no_invoice": "709-776776-1-1706100607"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 99.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 99.02,
								"claim_no_invoice": "555-233911-1-1706600672"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 99.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 99.02,
								"claim_no_invoice": "555-233911-1-1706200571"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 222.81,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 222.81,
								"claim_no_invoice": "555-233911-1-1705901641"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 508,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 508,
								"claim_no_invoice": "709-776776-1-1704400988"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 508,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 508,
								"claim_no_invoice": "709-776776-1-1704500639"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 508,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 508,
								"claim_no_invoice": "709-776776-1-1703703635"
							},
							{
								"benefit_st_nm": "North Carolina",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 561,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 561,
								"claim_no_invoice": "709-776776-1-1701301778"
							}
						]
					}
				},
				{
					"groupValue": "Connecticut",
					"doclist": {
						"numFound": 65,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 143.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 143.12,
								"claim_no_invoice": "555-228047-1-1717302640"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-234861-1-1717203538"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 259.76,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 259.76,
								"claim_no_invoice": "555-234861-1-1717001799"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1716701203"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-234861-1-1715801403"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 50,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 50,
								"claim_no_invoice": "555-234861-1-1716600661"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1716500212"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-17T00:00:00Z",
								"total_billing_audited": 40,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 40,
								"claim_no_invoice": "555-234861-1-1716600667"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-17T00:00:00Z",
								"total_billing_audited": 75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 75,
								"claim_no_invoice": "555-234861-1-1716600651"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 1415,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1415,
								"claim_no_invoice": "555-234861-1-1715203390"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-06-02T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1715100616"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-31T00:00:00Z",
								"total_billing_audited": 143.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 143.12,
								"claim_no_invoice": "555-228047-1-1714601778"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 255,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 255,
								"claim_no_invoice": "555-234861-1-1714400241"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 255,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 255,
								"claim_no_invoice": "555-234861-1-1713701162"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1713601218"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 255,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 255,
								"claim_no_invoice": "555-234861-1-1713700626"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235156-1-1709700320"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 4892.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 4892.51,
								"claim_no_invoice": "555-234861-1-1710803383"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1712202020"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 24.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 24.23,
								"claim_no_invoice": "555-234861-1-T127399845"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-03T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1711802640"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 180,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 180,
								"claim_no_invoice": "555-234861-1-1711701038"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 155,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 155,
								"claim_no_invoice": "555-234861-1-1711602983"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 94.52,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.52,
								"claim_no_invoice": "555-235156-1-1710201956"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 645,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 645,
								"claim_no_invoice": "555-234861-1-1711602850"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 907.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 907.98,
								"claim_no_invoice": "555-228047-1-1710402879"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-27T00:00:00Z",
								"total_billing_audited": 349.51,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 349.51,
								"claim_no_invoice": "555-234861-1-1710802780"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1710402888"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1710900966"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1710900054"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 200.9,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200.9,
								"claim_no_invoice": "555-234861-1-1710400638"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1710402172"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 311,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 311,
								"claim_no_invoice": "555-234861-1-1710400636"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 279.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 279.09,
								"claim_no_invoice": "555-235156-1-1710100019"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1709600824"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-14T00:00:00Z",
								"total_billing_audited": 1323,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1323,
								"claim_no_invoice": "555-234861-1-1710103182"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 200.66,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200.66,
								"claim_no_invoice": "555-235156-1-1709500703"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 139.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 139.63,
								"claim_no_invoice": "555-228047-1-1709600807"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 139.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 139.63,
								"claim_no_invoice": "555-228047-1-1709600819"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 24.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 24.23,
								"claim_no_invoice": "555-234861-1-T127097392"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 134.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 134.8,
								"claim_no_invoice": "555-228047-1-1709403413"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 143.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 143.12,
								"claim_no_invoice": "555-228047-1-1709403319"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 95.86,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.86,
								"claim_no_invoice": "555-228047-1-1708801852"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 136.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 136.14,
								"claim_no_invoice": "555-228047-1-1708203709"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 279.09,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 279.09,
								"claim_no_invoice": "555-234861-1-1708106084"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 99.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 99.35,
								"claim_no_invoice": "555-228047-1-1707602917"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228047-1-1636402096"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1707502250"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 728,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 728,
								"claim_no_invoice": "555-228047-1-1707901557"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 22.6,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228047-1-TM70681077"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1706100561"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 178.57,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 178.57,
								"claim_no_invoice": "555-228047-1-1705402657"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-02-23T00:00:00Z",
								"total_billing_audited": 1200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1200,
								"claim_no_invoice": "555-228047-1-1705300281"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 282.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 282.72,
								"claim_no_invoice": "555-228047-1-1704600900"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 77,
								"claim_no_invoice": "555-228047-1-1704602323"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 181.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.83,
								"claim_no_invoice": "555-228047-1-1702000238"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 123.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 123.72,
								"claim_no_invoice": "555-228047-1-1701201751"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-18T00:00:00Z",
								"total_billing_audited": 1180,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1180,
								"claim_no_invoice": "555-228047-1-1701701840"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 181.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.83,
								"claim_no_invoice": "555-228047-1-1700502863"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 181.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.83,
								"claim_no_invoice": "555-228047-1-1636402791"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 379.24,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 379.24,
								"claim_no_invoice": "555-228047-1-1636402142"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 316.4,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-228047-1-TM70051648"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 181.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.83,
								"claim_no_invoice": "555-228047-1-1636300862"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 181.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181.83,
								"claim_no_invoice": "555-228047-1-1636400062"
							},
							{
								"benefit_st_nm": "Connecticut",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 230.77,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230.77,
								"claim_no_invoice": "555-228047-1-1636402096"
							}
						]
					}
				},
				{
					"groupValue": "New York",
					"doclist": {
						"numFound": 70,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1717203098"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-29T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233163-1-1716800114"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 413.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 413.75,
								"claim_no_invoice": "555-193527-1-T127892309"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 35.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 35.74,
								"claim_no_invoice": "555-193527-1-T127892308"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-23T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1717001623"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 95.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 95.74,
								"claim_no_invoice": "555-193527-1-1717003060"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 200,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 200,
								"claim_no_invoice": "555-238930-1-1716502861"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233163-1-1715301064"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 33.55,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1715702755"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 71.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 71.44,
								"claim_no_invoice": "555-193527-1-1716504723"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 200.68,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235087-1-1715204231"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 64.07,
								"claim_no_invoice": "555-238612-1-1716302799"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 293.69,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 293.69,
								"claim_no_invoice": "555-238612-1-1715602630"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 64.07,
								"claim_no_invoice": "555-238612-1-1715803808"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 67.1,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1715202209"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 189.97,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1715202199"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 92.98,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1715204135"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 71.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 71.44,
								"claim_no_invoice": "555-193527-1-1715103498"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-27T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1713502251"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 64.07,
								"claim_no_invoice": "555-224001-1-1714301731"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 413.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 413.75,
								"claim_no_invoice": "555-193527-1-T127565388"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 92.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 92.98,
								"claim_no_invoice": "555-230109-1-1713602856"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 113.57,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1712501862"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1712301536"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 35.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 35.74,
								"claim_no_invoice": "555-193527-1-T127395260"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 200.68,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1712100998"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 94.69,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1712101123"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 1008.45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1008.45,
								"claim_no_invoice": "555-235087-1-1712202347"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 326.92,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235310-1-1712101140"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1711500121"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 104.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 104.08,
								"claim_no_invoice": "555-235361-1-1711703165"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 104.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 104.08,
								"claim_no_invoice": "555-235361-1-1711404307"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 344,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 344,
								"claim_no_invoice": "555-230109-1-1711401842"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1710703289"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1710703287"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 49.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 49.26,
								"claim_no_invoice": "555-235087-1-1709502493"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 94.92,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.92,
								"claim_no_invoice": "555-235087-1-1709501489"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 89.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 89.31,
								"claim_no_invoice": "555-193527-1-1710101238"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233163-1-1708700687"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 104.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 104.07,
								"claim_no_invoice": "555-230109-1-1710101475"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 878.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 878.48,
								"claim_no_invoice": "555-235310-1-1710301149"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-10T00:00:00Z",
								"total_billing_audited": 449.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 449.49,
								"claim_no_invoice": "555-193527-1-T127092055"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 1519.29,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1519.29,
								"claim_no_invoice": "555-235361-1-1709503283"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 490,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-193527-1-1708001884"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 265.82,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-193527-1-1708003071"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 528.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 528.98,
								"claim_no_invoice": "555-235361-1-1708301332"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-30T00:00:00Z",
								"total_billing_audited": 320,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 320,
								"claim_no_invoice": "555-230109-1-1708101079"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 878.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 878.67,
								"claim_no_invoice": "555-230109-1-1707900836"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 64.07,
								"claim_no_invoice": "555-224001-1-1708300846"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 48.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 48.8,
								"claim_no_invoice": "555-230109-1-T126934218"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-25T00:00:00Z",
								"total_billing_audited": 388.67,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 388.67,
								"claim_no_invoice": "555-193527-1-1708001884"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 449.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 449.49,
								"claim_no_invoice": "555-193527-1-T126787540"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": -88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-215431-1-1625301033"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-03-07T00:00:00Z",
								"total_billing_audited": 451,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 451,
								"claim_no_invoice": "555-230109-1-1706003246"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 236.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 236.94,
								"claim_no_invoice": "555-230109-1-1705400696"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 243.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 243.38,
								"claim_no_invoice": "555-230109-1-1705200872"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 64.07,
								"claim_no_invoice": "555-232297-1-1704601007"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 237.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 237.75,
								"claim_no_invoice": "555-232297-1-1704101481"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 977.55,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 977.55,
								"claim_no_invoice": "555-210152-1-1703803505"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 142.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.36,
								"claim_no_invoice": "555-224001-1-1703700612"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-210152-1-1629403288"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 153.37,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 153.37,
								"claim_no_invoice": "555-193527-1-1702505528"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 98.75,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 98.75,
								"claim_no_invoice": "555-193527-1-1702505529"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 419.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 419.49,
								"claim_no_invoice": "555-193527-1-T126282356"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 53.15,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 53.15,
								"claim_no_invoice": "555-230109-1-T126282035"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 148.69,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 148.69,
								"claim_no_invoice": "555-222538-1-1701600076"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 332.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 332.14,
								"claim_no_invoice": "555-224001-1-1636501103"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 874.43,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 874.43,
								"claim_no_invoice": "555-222538-1-1700500426"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 64.07,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-222538-1-1636501799"
							},
							{
								"benefit_st_nm": "New York",
								"process_dt": "2017-01-06T00:00:00Z",
								"total_billing_audited": 215.36,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 215.36,
								"claim_no_invoice": "555-224001-1-1700301763"
							}
						]
					}
				},
				{
					"groupValue": "Florida",
					"doclist": {
						"numFound": 48,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-06-28T00:00:00Z",
								"total_billing_audited": 108,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 108,
								"claim_no_invoice": "555-238374-1-1717202742"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-238374-1-1715801992"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 637.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 637.68,
								"claim_no_invoice": "555-233830-1-1713001561"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 407.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 407.73,
								"claim_no_invoice": "555-233850-1-1713002074"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-24T00:00:00Z",
								"total_billing_audited": 414,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 414,
								"claim_no_invoice": "555-234251-1-1713901403"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 305.03,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 305.03,
								"claim_no_invoice": "555-238374-1-1713700434"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 348,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 348,
								"claim_no_invoice": "555-235086-1-1713102052"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 84,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 84,
								"claim_no_invoice": "555-233830-1-1711802185"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 193,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 193,
								"claim_no_invoice": "555-237218-1-1711703623"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218995-1-1700403788"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 164,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164,
								"claim_no_invoice": "555-233830-1-1711404375"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233850-1-1707400876"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 433.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 433.98,
								"claim_no_invoice": "555-234251-1-1709601757"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 164,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164,
								"claim_no_invoice": "555-233830-1-1710903394"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 164,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164,
								"claim_no_invoice": "555-233830-1-1710702861"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 111,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 111,
								"claim_no_invoice": "555-233830-1-1710702868"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 111,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 111,
								"claim_no_invoice": "555-233830-1-1710903734"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 326,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 326,
								"claim_no_invoice": "555-233494-1-1710701042"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-234251-1-1710401746"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 164,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164,
								"claim_no_invoice": "555-233830-1-1710100376"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 164,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 164,
								"claim_no_invoice": "555-233830-1-1709700185"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 90,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 90,
								"claim_no_invoice": "555-233850-1-1709700187"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 653,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220855-1-1709703651"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 698,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 698,
								"claim_no_invoice": "555-235086-1-1709402996"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-234251-1-1708901460"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 219,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 219,
								"claim_no_invoice": "555-233494-1-1708900953"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-233850-1-1708701357"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-233830-1-1708603362"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 227.98,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 227.98,
								"claim_no_invoice": "555-233850-1-1707400876"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 322,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 322,
								"claim_no_invoice": "555-233494-1-1707403838"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-234251-1-1707500737"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-17T00:00:00Z",
								"total_billing_audited": 124,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 124,
								"claim_no_invoice": "555-233830-1-1707302852"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 86.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 86.96,
								"claim_no_invoice": "555-233850-1-T126791777"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 26.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 26.16,
								"claim_no_invoice": "555-233850-1-T126791778"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-10T00:00:00Z",
								"total_billing_audited": 851.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-219632-1-1700500988"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 149,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 149,
								"claim_no_invoice": "555-234251-1-1706500313"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 262,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 262,
								"claim_no_invoice": "555-212210-1-1705903500"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 1691,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1691,
								"claim_no_invoice": "555-212210-1-1705900084"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 1708,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1708,
								"claim_no_invoice": "555-212210-1-1705904211"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-203103-1-1618003381"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-02-06T00:00:00Z",
								"total_billing_audited": 277,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 277,
								"claim_no_invoice": "555-219632-1-1703300534"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-02-01T00:00:00Z",
								"total_billing_audited": 184.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218995-1-1630201894"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 323.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 323.4,
								"claim_no_invoice": "555-226508-1-1701902580"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 87,
								"claim_no_invoice": "555-226508-1-1701902585"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-18T00:00:00Z",
								"total_billing_audited": 646,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 646,
								"claim_no_invoice": "555-218995-1-1700902918"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 277,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 277,
								"claim_no_invoice": "555-219632-1-1701201021"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 581,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218995-1-1700403788"
							},
							{
								"benefit_st_nm": "Florida",
								"process_dt": "2017-01-06T00:00:00Z",
								"total_billing_audited": 94.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.6,
								"claim_no_invoice": "555-219632-1-1700500988"
							}
						]
					}
				},
				{
					"groupValue": "Missouri",
					"doclist": {
						"numFound": 22,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 482.47,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-224373-1-1717101653"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-980433-1-1612603770"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230113-1-1706202285"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230113-1-1706200611"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 527.48,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 527.48,
								"claim_no_invoice": "555-224373-1-1710201150"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-04-13T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-980433-1-TM63281123"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 197,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 197,
								"claim_no_invoice": "555-230113-1-1706200611"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 641.02,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 641.02,
								"claim_no_invoice": "555-230113-1-1706202285"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 928.14,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 928.14,
								"claim_no_invoice": "555-230113-1-1706200591"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 132,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 132,
								"claim_no_invoice": "555-230113-1-1706202287"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 105.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 105.23,
								"claim_no_invoice": "555-224373-1-1706202506"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-03-01T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "710-876944-1-1705203422"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 414.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 414.47,
								"claim_no_invoice": "555-224373-1-1704604747"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 1379,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1379,
								"claim_no_invoice": "710-998504-1-1704604089"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 401,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-223271-1-1704601227"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 122.87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 122.87,
								"claim_no_invoice": "555-230113-1-T126462161"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 2790,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2790,
								"claim_no_invoice": "710-998504-1-1703902505"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 105.23,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-224373-1-TM70441118"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-11T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "710-876944-1-1703300695"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-04T00:00:00Z",
								"total_billing_audited": 98,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-223271-1-1703203656"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 749.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 749.68,
								"claim_no_invoice": "555-224373-1-1703000837"
							},
							{
								"benefit_st_nm": "Missouri",
								"process_dt": "2017-01-14T00:00:00Z",
								"total_billing_audited": 250,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 250,
								"claim_no_invoice": "555-223271-1-1701105374"
							}
						]
					}
				},
				{
					"groupValue": "Washington",
					"doclist": {
						"numFound": 3,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Washington",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 245,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 245,
								"claim_no_invoice": "572-005198-1-1713902378"
							},
							{
								"benefit_st_nm": "Washington",
								"process_dt": "2017-05-17T00:00:00Z",
								"total_billing_audited": 161,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 161,
								"claim_no_invoice": "572-005198-1-1712803214"
							},
							{
								"benefit_st_nm": "Washington",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 140,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 140,
								"claim_no_invoice": "572-005198-1-1713001232"
							}
						]
					}
				},
				{
					"groupValue": "Tennessee",
					"doclist": {
						"numFound": 70,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 262,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 262,
								"claim_no_invoice": "555-232519-1-1717302317"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 273,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 273,
								"claim_no_invoice": "555-219037-1-1717701660"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 271,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 271,
								"claim_no_invoice": "555-219037-1-1717701224"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 262,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 262,
								"claim_no_invoice": "555-232519-1-1717003383"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 387,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 387,
								"claim_no_invoice": "555-232519-1-1716602806"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 342,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 342,
								"claim_no_invoice": "555-219037-1-1717002778"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 272,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 272,
								"claim_no_invoice": "555-219037-1-1716603655"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 279,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 279,
								"claim_no_invoice": "555-219037-1-1717002781"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-17T00:00:00Z",
								"total_billing_audited": 466,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 466,
								"claim_no_invoice": "555-219037-1-1716700745"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 476,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 476,
								"claim_no_invoice": "555-219037-1-1716501609"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 266,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266,
								"claim_no_invoice": "555-232519-1-1715804709"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-06T00:00:00Z",
								"total_billing_audited": 3599.25,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3599.25,
								"claim_no_invoice": "555-232519-1-1714203924"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 532,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 532,
								"claim_no_invoice": "555-232519-1-1715002388"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-232519-1-1714203494"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-24T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1714302654"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 266,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266,
								"claim_no_invoice": "555-232519-1-1713902827"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 266,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266,
								"claim_no_invoice": "555-232519-1-1713803506"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-19T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1713802015"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-15T00:00:00Z",
								"total_billing_audited": 250,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 250,
								"claim_no_invoice": "555-219037-1-1713100470"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-13T00:00:00Z",
								"total_billing_audited": 271,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 271,
								"claim_no_invoice": "555-232519-1-1713201923"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-13T00:00:00Z",
								"total_billing_audited": 222,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 222,
								"claim_no_invoice": "555-219037-1-1713201235"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-12T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1713100250"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1712500942"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-219037-1-1712801088"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-09T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-232519-1-1712802140"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-225585-1-1712300064"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-04T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1712300317"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-05-01T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-232519-1-1711602670"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 266,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 266,
								"claim_no_invoice": "555-219037-1-1711702172"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 539,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 539,
								"claim_no_invoice": "555-232519-1-1711401700"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-232519-1-1711501536"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-232519-1-1711403844"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1711004272"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 228,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 228,
								"claim_no_invoice": "555-219037-1-1711003341"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-232519-1-1711100643"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-22T00:00:00Z",
								"total_billing_audited": 363,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 363,
								"claim_no_invoice": "555-232519-1-1711101046"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-232519-1-1710801335"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 206,
								"claim_no_invoice": "555-219037-1-1710702655"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-19T00:00:00Z",
								"total_billing_audited": 249,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 249,
								"claim_no_invoice": "555-219037-1-1710703381"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-04-11T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-225585-1-1709701565"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 542.33,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 542.33,
								"claim_no_invoice": "555-219037-1-1708105811"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-232519-1-1708103518"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 136,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 136,
								"claim_no_invoice": "555-219037-1-1708103511"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 246.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 246.8,
								"claim_no_invoice": "555-225585-1-1708104437"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 137.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 137.4,
								"claim_no_invoice": "555-225585-1-1708001353"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 284.46,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 284.46,
								"claim_no_invoice": "555-225585-1-1707900026"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-232519-1-1707003018"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-13T00:00:00Z",
								"total_billing_audited": 36.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 36.22,
								"claim_no_invoice": "555-232519-1-T126788592"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-04T00:00:00Z",
								"total_billing_audited": 1411,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1411,
								"claim_no_invoice": "555-225585-1-1706200191"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207682-1-1624201988"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 1486.45,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1486.45,
								"claim_no_invoice": "555-219037-1-1705800079"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 72.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 72.44,
								"claim_no_invoice": "555-232519-1-T126627576"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-232519-1-1705301575"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 36.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 36.22,
								"claim_no_invoice": "555-232519-1-T126627575"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207682-1-1623000163"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 348,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 348,
								"claim_no_invoice": "555-232519-1-1704600801"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 452,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 452,
								"claim_no_invoice": "555-219037-1-1704603519"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-219037-1-1702600466"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 181,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 181,
								"claim_no_invoice": "555-219037-1-1702600434"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-28T00:00:00Z",
								"total_billing_audited": 233,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 233,
								"claim_no_invoice": "555-219037-1-1702600432"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-225585-1-1702504357"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 953,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 953,
								"claim_no_invoice": "555-201741-1-1701901967"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-18T00:00:00Z",
								"total_billing_audited": 414,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 414,
								"claim_no_invoice": "555-225585-1-1700301461"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-18T00:00:00Z",
								"total_billing_audited": 267,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 267,
								"claim_no_invoice": "555-225585-1-1700301423"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-17T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "709-760805-1-1600702069"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 948,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-219037-1-1700301189"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-11T00:00:00Z",
								"total_billing_audited": 1486,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1486,
								"claim_no_invoice": "555-219037-1-1700900798"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-10T00:00:00Z",
								"total_billing_audited": 1579.89,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1579.89,
								"claim_no_invoice": "555-225585-1-1700900796"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-09T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-214337-1-1622801315"
							},
							{
								"benefit_st_nm": "Tennessee",
								"process_dt": "2017-01-07T00:00:00Z",
								"total_billing_audited": 326,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 326,
								"claim_no_invoice": "555-225585-1-1700505406"
							}
						]
					}
				},
				{
					"groupValue": "Alabama",
					"doclist": {
						"numFound": 9,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-06-08T00:00:00Z",
								"total_billing_audited": 263,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 263,
								"claim_no_invoice": "555-204996-1-1715701028"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 23.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 23.44,
								"claim_no_invoice": "555-204996-1-T127569593"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 55.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 55.44,
								"claim_no_invoice": "555-204996-1-T127398997"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-04-26T00:00:00Z",
								"total_billing_audited": 3031,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3031,
								"claim_no_invoice": "555-204996-1-1711100001"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 156.26,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-223998-1-1700602010"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 503,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 503,
								"claim_no_invoice": "555-204996-1-1707602663"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 593.38,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 593.38,
								"claim_no_invoice": "555-204996-1-1707204031"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-204996-1-1617300776"
							},
							{
								"benefit_st_nm": "Alabama",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-223998-1-1700602010"
							}
						]
					}
				},
				{
					"groupValue": "Virginia",
					"doclist": {
						"numFound": 19,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 1861.83,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1861.83,
								"claim_no_invoice": "555-237307-1-1717500183"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-06-15T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-206121-1-1716301247"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-06-05T00:00:00Z",
								"total_billing_audited": 312,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 312,
								"claim_no_invoice": "555-237307-1-1715102304"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-05-15T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231406-1-1704102573"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231406-1-1704102562"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 100,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 100,
								"claim_no_invoice": "555-206121-1-1708303040"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 4180,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220383-1-1703000879"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220383-1-1703000879"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 114,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 114,
								"claim_no_invoice": "555-182578-1-1705301558"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 212.49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212.49,
								"claim_no_invoice": "555-231406-1-1705200465"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-24T00:00:00Z",
								"total_billing_audited": 685,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 685,
								"claim_no_invoice": "555-207766-1-1705200746"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 885,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220383-1-1704602662"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 893.04,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 893.04,
								"claim_no_invoice": "555-231406-1-1704102583"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 307.95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 307.95,
								"claim_no_invoice": "555-231406-1-1704102562"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-17T00:00:00Z",
								"total_billing_audited": 337.95,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 337.95,
								"claim_no_invoice": "555-231406-1-1704102573"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-02-04T00:00:00Z",
								"total_billing_audited": 599,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220383-1-1703400734"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-206121-1-1629501916"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-01-20T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-206121-1-1629501908"
							},
							{
								"benefit_st_nm": "Virginia",
								"process_dt": "2017-01-05T00:00:00Z",
								"total_billing_audited": 371,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 371,
								"claim_no_invoice": "555-206121-1-1633700167"
							}
						]
					}
				},
				{
					"groupValue": "New Mexico",
					"doclist": {
						"numFound": 21,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 112.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.74,
								"claim_no_invoice": "710-862662-1-T127894547"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-06-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "710-862662-1-1715600398"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 47.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 47.53,
								"claim_no_invoice": "710-862662-1-1716001944"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 112.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.74,
								"claim_no_invoice": "710-862662-1-T127567695"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-05-08T00:00:00Z",
								"total_billing_audited": 30.27,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 30.27,
								"claim_no_invoice": "710-862662-1-T127397255"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-04-29T00:00:00Z",
								"total_billing_audited": 187.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 187.8,
								"claim_no_invoice": "710-862662-1-1711703620"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 550,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-862662-1-1710902690"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 82.47,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 82.47,
								"claim_no_invoice": "710-862662-1-T127247594"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-04-24T00:00:00Z",
								"total_billing_audited": 550,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 550,
								"claim_no_invoice": "710-862662-1-1710802378"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-04-06T00:00:00Z",
								"total_billing_audited": 230.72,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230.72,
								"claim_no_invoice": "710-862662-1-1709403164"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 209,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 209,
								"claim_no_invoice": "710-862662-1-1708801227"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 112.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.74,
								"claim_no_invoice": "710-862662-1-T126936904"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-03-16T00:00:00Z",
								"total_billing_audited": 310.87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 310.87,
								"claim_no_invoice": "555-226651-1-1706700839"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-02-27T00:00:00Z",
								"total_billing_audited": 112.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.74,
								"claim_no_invoice": "710-862662-1-T126628618"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 295,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 295,
								"claim_no_invoice": "710-862662-1-1701803421"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 33,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 33,
								"claim_no_invoice": "710-862662-1-1702701227"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-01-28T00:00:00Z",
								"total_billing_audited": 187.8,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 187.8,
								"claim_no_invoice": "710-862662-1-1702603087"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-01-28T00:00:00Z",
								"total_billing_audited": 321,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 321,
								"claim_no_invoice": "710-862662-1-1702603326"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 110.53,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 110.53,
								"claim_no_invoice": "710-862662-1-1702404351"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 112.74,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 112.74,
								"claim_no_invoice": "710-862662-1-T126284597"
							},
							{
								"benefit_st_nm": "New Mexico",
								"process_dt": "2017-01-05T00:00:00Z",
								"total_billing_audited": 178,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 178,
								"claim_no_invoice": "555-226651-1-1700200650"
							}
						]
					}
				},
				{
					"groupValue": "Nebraska",
					"doclist": {
						"numFound": 11,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 97.17,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.17,
								"claim_no_invoice": "572-008858-1-1716000508"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 143.23,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 143.23,
								"claim_no_invoice": "572-008858-1-1716000506"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 217.62,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.62,
								"claim_no_invoice": "572-008858-1-1716000510"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-13T00:00:00Z",
								"total_billing_audited": 97.17,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.17,
								"claim_no_invoice": "572-008858-1-1716000507"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 127.44,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 127.44,
								"claim_no_invoice": "572-008858-1-1716000512"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 87.87,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 87.87,
								"claim_no_invoice": "572-008858-1-1716000509"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 145.96,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 145.96,
								"claim_no_invoice": "572-008858-1-1716000501"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 130.35,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 130.35,
								"claim_no_invoice": "572-008858-1-1716000504"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-992969-1-1632600408"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 234.68,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-992969-1-1701800965"
							},
							{
								"benefit_st_nm": "Nebraska",
								"process_dt": "2017-01-21T00:00:00Z",
								"total_billing_audited": 375.32,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 375.32,
								"claim_no_invoice": "710-992969-1-1701800965"
							}
						]
					}
				},
				{
					"groupValue": "Illinois",
					"doclist": {
						"numFound": 20,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 275.6,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 275.6,
								"claim_no_invoice": "555-231660-1-1717001149"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-21T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1716702777"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 565,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 565,
								"claim_no_invoice": "555-231660-1-1716602269"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1716602061"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1716602157"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1715001824"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-06-01T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1715001819"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-31T00:00:00Z",
								"total_billing_audited": 3279,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 3279,
								"claim_no_invoice": "555-231660-1-1714403007"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-26T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1714403006"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1713900405"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 195,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 195,
								"claim_no_invoice": "555-231660-1-1713900407"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 364,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 364,
								"claim_no_invoice": "555-231660-1-1713102497"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 244,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 244,
								"claim_no_invoice": "555-231660-1-1713102342"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-04-08T00:00:00Z",
								"total_billing_audited": 193,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-901471-1-1709000666"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 141.7,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141.7,
								"claim_no_invoice": "555-229159-1-1704404144"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 103,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 103,
								"claim_no_invoice": "710-901471-1-1703303229"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 50,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 50,
								"claim_no_invoice": "555-231660-1-1703801567"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 399.22,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 399.22,
								"claim_no_invoice": "555-229159-1-1702002084"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 168.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 168.12,
								"claim_no_invoice": "555-229159-1-1702002101"
							},
							{
								"benefit_st_nm": "Illinois",
								"process_dt": "2017-01-25T00:00:00Z",
								"total_billing_audited": 511.6,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-997918-1-1700901152"
							}
						]
					}
				},
				{
					"groupValue": "Georgia",
					"doclist": {
						"numFound": 16,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-06-14T00:00:00Z",
								"total_billing_audited": 156,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 156,
								"claim_no_invoice": "555-148967-1-1716001029"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-06-12T00:00:00Z",
								"total_billing_audited": 430,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 430,
								"claim_no_invoice": "555-148967-1-1714900827"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 156,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 156,
								"claim_no_invoice": "555-148967-1-1715701207"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-06-09T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-148967-1-1715301656"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-06-07T00:00:00Z",
								"total_billing_audited": 45.99,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 45.99,
								"claim_no_invoice": "555-201664-1-1715301438"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-05-05T00:00:00Z",
								"total_billing_audited": 1518,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-148967-1-1702403115"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 1750.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1750.93,
								"claim_no_invoice": "555-221524-1-1711604215"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-148967-1-1710202162"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 118,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 118,
								"claim_no_invoice": "555-148967-1-1708602294"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-03-23T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-215885-1-1707902086"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-03-22T00:00:00Z",
								"total_billing_audited": 1431,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1431,
								"claim_no_invoice": "555-148967-1-1707400511"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 254.99,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 254.99,
								"claim_no_invoice": "555-230973-1-1701701895"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-148967-1-1702403115"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 371,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 371,
								"claim_no_invoice": "555-148967-1-1702504365"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 141,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 141,
								"claim_no_invoice": "555-148967-1-1634302404"
							},
							{
								"benefit_st_nm": "Georgia",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 343.56,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 343.56,
								"claim_no_invoice": "555-228223-1-1635800481"
							}
						]
					}
				},
				{
					"groupValue": "Oregon",
					"doclist": {
						"numFound": 54,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 230,
								"claim_no_invoice": "555-229673-1-1717403799"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-TM70331322"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-05-25T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-TM70321487"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-05-11T00:00:00Z",
								"total_billing_audited": 405,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1712901614"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-05-02T00:00:00Z",
								"total_billing_audited": 820,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1711703040"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 2125,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 2125,
								"claim_no_invoice": "555-231751-1-1711401541"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-04-20T00:00:00Z",
								"total_billing_audited": 304,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1710801926"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-04-17T00:00:00Z",
								"total_billing_audited": 178.94,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 178.94,
								"claim_no_invoice": "555-231751-1-1710207118"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1708801682"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101904"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 465,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1708101696"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 162.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 162.12,
								"claim_no_invoice": "555-231751-1-1707603328"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-20T00:00:00Z",
								"total_billing_audited": 216.16,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 216.16,
								"claim_no_invoice": "555-231751-1-1707501796"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 485.89,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1706801774"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 162.12,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 162.12,
								"claim_no_invoice": "555-231751-1-1707200242"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 146.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 146.08,
								"claim_no_invoice": "555-231751-1-1706801654"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-14T00:00:00Z",
								"total_billing_audited": 166.27,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 166.27,
								"claim_no_invoice": "555-231751-1-1706801238"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-08T00:00:00Z",
								"total_billing_audited": 206,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-001482-1-1706500567"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1705803414"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-231751-1-1705404012"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 145.49,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1705404010"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-28T00:00:00Z",
								"total_billing_audited": 220.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 220.31,
								"claim_no_invoice": "555-231751-1-1705403267"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 216.15,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 216.15,
								"claim_no_invoice": "555-231751-1-1704803006"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-22T00:00:00Z",
								"total_billing_audited": 363,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-001482-1-1704802648"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-231751-1-1704703615"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 216.15,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 216.15,
								"claim_no_invoice": "555-231751-1-1704404066"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 81.41,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-TM70331322"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 26.55,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-TM70321487"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101918"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 217.93,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 217.93,
								"claim_no_invoice": "555-231751-1-1704002690"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 145.49,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1704002697"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 145.49,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703203253"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703203272"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 329.3,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101935"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 1606.89,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1704100908"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703200558"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-14T00:00:00Z",
								"total_billing_audited": 239.31,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101904"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-13T00:00:00Z",
								"total_billing_audited": 230,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1704001684"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 212,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 212,
								"claim_no_invoice": "555-231751-1-1703801964"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703203272"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703200558"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101918"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703101904"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 249,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1702301378"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 15,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1702001404"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231751-1-1703203253"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-02-01T00:00:00Z",
								"total_billing_audited": 376,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-901026-1-1703002643"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1702301378"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-30T00:00:00Z",
								"total_billing_audited": 352.36,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1702600652"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-27T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229673-1-1702001404"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 1350,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-996134-1-1625900533"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-24T00:00:00Z",
								"total_billing_audited": 249,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-996993-1-1701905062"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 38,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-220708-1-1700501997"
							},
							{
								"benefit_st_nm": "Oregon",
								"process_dt": "2017-01-04T00:00:00Z",
								"total_billing_audited": 243,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-901026-1-1700200455"
							}
						]
					}
				},
				{
					"groupValue": "Louisiana",
					"doclist": {
						"numFound": 31,
						"start": 0,
						"maxScore": 1,
						"docs": [
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-22T00:00:00Z",
								"total_billing_audited": 60,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218323-1-1717202065"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "555-218323-1-1716402304"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "555-218323-1-1716402314"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "555-218323-1-1716402319"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 210,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 210,
								"claim_no_invoice": "555-218323-1-1716402325"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-06-20T00:00:00Z",
								"total_billing_audited": 335,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 335,
								"claim_no_invoice": "555-218323-1-1716402278"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-05-23T00:00:00Z",
								"total_billing_audited": 330,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 330,
								"claim_no_invoice": "555-218323-1-1704602290"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-05-18T00:00:00Z",
								"total_billing_audited": -330,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-218323-1-1704602290"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-05-16T00:00:00Z",
								"total_billing_audited": 1230,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1230,
								"claim_no_invoice": "555-218323-1-1711800336"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 70,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 70,
								"claim_no_invoice": "555-218323-1-1706000975"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 70,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 70,
								"claim_no_invoice": "555-218323-1-1705802712"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-03-02T00:00:00Z",
								"total_billing_audited": 330,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 330,
								"claim_no_invoice": "555-218323-1-1704602290"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 280,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 280,
								"claim_no_invoice": "555-218323-1-1704602291"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1704602297"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1704602287"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1704602289"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1704602292"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 181.29,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-000372-1-1703900728"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 152.13,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-000372-1-1703902582"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-15T00:00:00Z",
								"total_billing_audited": 409.82,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-000372-1-1703902570"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1703402351"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-10T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1703402344"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-02-06T00:00:00Z",
								"total_billing_audited": 209.52,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-000372-1-1703401793"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1701702522"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 15969.89,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 15969.89,
								"claim_no_invoice": "555-218323-1-1633402622"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1701000664"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1701000672"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 270,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 270,
								"claim_no_invoice": "555-218323-1-1701000662"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 500,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 500,
								"claim_no_invoice": "555-218323-1-1636100926"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 70,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 70,
								"claim_no_invoice": "555-218323-1-1636404515"
							},
							{
								"benefit_st_nm": "Louisiana",
								"process_dt": "2017-01-03T00:00:00Z",
								"total_billing_audited": 70,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 70,
								"claim_no_invoice": "555-218323-1-1636101084"
							}
						]
					}
				},
				{
					"groupValue": "Indiana",
					"doclist": {
						"numFound": 12,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-06-30T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-204706-1-1617501493"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-04-15T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-204706-1-1617403716"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 155.63,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-235576-1-1708802146"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-03-31T00:00:00Z",
								"total_billing_audited": 267.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 267.08,
								"claim_no_invoice": "555-235576-1-1708801955"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-03-29T00:00:00Z",
								"total_billing_audited": 466.4,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 466.4,
								"claim_no_invoice": "555-235576-1-1708200833"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-03-27T00:00:00Z",
								"total_billing_audited": 419.84,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 419.84,
								"claim_no_invoice": "555-235576-1-1708200834"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-03-24T00:00:00Z",
								"total_billing_audited": 122,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 122,
								"claim_no_invoice": "555-224873-1-1708105912"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 510,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 510,
								"claim_no_invoice": "555-204706-1-1704604245"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-02-16T00:00:00Z",
								"total_billing_audited": 147,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 147,
								"claim_no_invoice": "555-224873-1-1703403059"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 155.63,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 155.63,
								"claim_no_invoice": "555-231208-1-1703402296"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-01-26T00:00:00Z",
								"total_billing_audited": 788.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 788.85,
								"claim_no_invoice": "555-231208-1-1702000726"
							},
							{
								"benefit_st_nm": "Indiana",
								"process_dt": "2017-01-07T00:00:00Z",
								"total_billing_audited": 219.85,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 219.85,
								"claim_no_invoice": "555-224873-1-1636501142"
							}
						]
					}
				},
				{
					"groupValue": "Massachusetts",
					"doclist": {
						"numFound": 7,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-05-10T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-233440-1-1706002048"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-05-03T00:00:00Z",
								"total_billing_audited": 1195.2,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1195.2,
								"claim_no_invoice": "555-233440-1-1712100732"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-04-07T00:00:00Z",
								"total_billing_audited": 199,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231911-1-1709301535"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-04-05T00:00:00Z",
								"total_billing_audited": 328,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 328,
								"claim_no_invoice": "555-233440-1-1707902664"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-03-15T00:00:00Z",
								"total_billing_audited": 170,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 170,
								"claim_no_invoice": "555-233440-1-1707004248"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-03-09T00:00:00Z",
								"total_billing_audited": 360,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 360,
								"claim_no_invoice": "555-233440-1-1706002048"
							},
							{
								"benefit_st_nm": "Massachusetts",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 199,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-231911-1-1705903311"
							}
						]
					}
				},
				{
					"groupValue": "Maryland",
					"doclist": {
						"numFound": 5,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Maryland",
								"process_dt": "2017-06-28T00:00:00Z",
								"total_billing_audited": 97.21,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.21,
								"claim_no_invoice": "555-239310-1-1717403844"
							},
							{
								"benefit_st_nm": "Maryland",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 402.88,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 402.88,
								"claim_no_invoice": "555-239310-1-1717302829"
							},
							{
								"benefit_st_nm": "Maryland",
								"process_dt": "2017-06-26T00:00:00Z",
								"total_billing_audited": 97.21,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 97.21,
								"claim_no_invoice": "555-239310-1-1717202566"
							},
							{
								"benefit_st_nm": "Maryland",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 142.73,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 142.73,
								"claim_no_invoice": "555-231950-1-1703001194"
							},
							{
								"benefit_st_nm": "Maryland",
								"process_dt": "2017-01-31T00:00:00Z",
								"total_billing_audited": 218.08,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 218.08,
								"claim_no_invoice": "555-231950-1-1703001196"
							}
						]
					}
				},
				{
					"groupValue": "Wyoming",
					"doclist": {
						"numFound": 2,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Wyoming",
								"process_dt": "2017-05-22T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-990686-1-1623500785"
							},
							{
								"benefit_st_nm": "Wyoming",
								"process_dt": "2017-01-23T00:00:00Z",
								"total_billing_audited": 1129,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-990686-1-1620401720"
							}
						]
					}
				},
				{
					"groupValue": "Utah",
					"doclist": {
						"numFound": 4,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Utah",
								"process_dt": "2017-04-28T00:00:00Z",
								"total_billing_audited": 668.72,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229935-1-1711000960"
							},
							{
								"benefit_st_nm": "Utah",
								"process_dt": "2017-04-25T00:00:00Z",
								"total_billing_audited": 622.95,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229935-1-1710703208"
							},
							{
								"benefit_st_nm": "Utah",
								"process_dt": "2017-03-06T00:00:00Z",
								"total_billing_audited": 185,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 185,
								"claim_no_invoice": "572-001816-1-1706101357"
							},
							{
								"benefit_st_nm": "Utah",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 285,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 285,
								"claim_no_invoice": "572-001734-1-1706101132"
							}
						]
					}
				},
				{
					"groupValue": "Hawaii",
					"doclist": {
						"numFound": 6,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-06-27T00:00:00Z",
								"total_billing_audited": 2431.08,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-008023-1-1717101658"
							},
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-04-18T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-947522-1-1532003909"
							},
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-04-03T00:00:00Z",
								"total_billing_audited": 320.22,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-995155-1-1707301152"
							},
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-03-28T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-947522-1-1514102562"
							},
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 94.34,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-995155-1-1707200206"
							},
							{
								"benefit_st_nm": "Hawaii",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 94.34,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 94.34,
								"claim_no_invoice": "710-947522-1-1701301100"
							}
						]
					}
				},
				{
					"groupValue": "Texas",
					"doclist": {
						"numFound": 9,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-04-04T00:00:00Z",
								"total_billing_audited": 350.74,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "572-002323-1-1708800246"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 2152.25,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229757-1-1703202184"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 559.26,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230717-1-1703803217"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-08T00:00:00Z",
								"total_billing_audited": 203,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-230717-1-1703703095"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-07T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-207015-1-1620903286"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 155.11,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229757-1-1702300254"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-02-02T00:00:00Z",
								"total_billing_audited": 155.11,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229757-1-1702601278"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-01-19T00:00:00Z",
								"total_billing_audited": 220.09,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229757-1-1701703861"
							},
							{
								"benefit_st_nm": "Texas",
								"process_dt": "2017-01-13T00:00:00Z",
								"total_billing_audited": 327.02,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-229757-1-1701201310"
							}
						]
					}
				},
				{
					"groupValue": "Minnesota",
					"doclist": {
						"numFound": 2,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Minnesota",
								"process_dt": "2017-06-19T00:00:00Z",
								"total_billing_audited": 209,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-238951-1-1716400963"
							},
							{
								"benefit_st_nm": "Minnesota",
								"process_dt": "2017-06-16T00:00:00Z",
								"total_billing_audited": 111,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-238951-1-1716102003"
							}
						]
					}
				},
				{
					"groupValue": "New Hampshire",
					"doclist": {
						"numFound": 1,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "New Hampshire",
								"process_dt": "2017-02-21T00:00:00Z",
								"total_billing_audited": 49,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 49,
								"claim_no_invoice": "555-198985-1-1704501029"
							}
						]
					}
				},
				{
					"groupValue": "Oklahoma",
					"doclist": {
						"numFound": 2,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Oklahoma",
								"process_dt": "2017-05-17T00:00:00Z",
								"total_billing_audited": 1074,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 1074,
								"claim_no_invoice": "555-226584-1-1713202184"
							},
							{
								"benefit_st_nm": "Oklahoma",
								"process_dt": "2017-03-21T00:00:00Z",
								"total_billing_audited": 262.2,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 262.2,
								"claim_no_invoice": "572-002668-1-1707000602"
							}
						]
					}
				},
				{
					"groupValue": "Arizona",
					"doclist": {
						"numFound": 1,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Arizona",
								"process_dt": "2017-01-12T00:00:00Z",
								"total_billing_audited": 0,
								"ppo_in": "Y",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "710-977669-1-1613906725"
							}
						]
					}
				},
				{
					"groupValue": "Kansas",
					"doclist": {
						"numFound": 1,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "Kansas",
								"process_dt": "2017-02-09T00:00:00Z",
								"total_billing_audited": 34.81,
								"ppo_in": "N",
								"network_bills_ct_pen": 0,
								"ppo_amt": 0,
								"claim_no_invoice": "555-223262-1-TM70201091"
							}
						]
					}
				},
				{
					"groupValue": "District of Columbia",
					"doclist": {
						"numFound": 1,
						"start": 0,
						"docs": [
							{
								"benefit_st_nm": "District of Columbia",
								"process_dt": "2017-03-03T00:00:00Z",
								"total_billing_audited": 803,
								"ppo_in": "Y",
								"network_bills_ct_pen": 1,
								"ppo_amt": 803,
								"claim_no_invoice": "555-219006-1-1705504072"
							}
						]
					}
				}
			]
		}
	}
};