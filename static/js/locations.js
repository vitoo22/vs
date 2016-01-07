var myLocations = [
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Livigno", "Italy", 46.5363, 10.13348, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Manchester", "United Kingdom", 53.4667, -2.2333, "train"],
	["Crewe", "United Kingdom", 53.0990, -2.4400, "car"],
	["London", "United Kingdom", 51.5072, -0.1275, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Amsterdam", "Holland", 52.3667, 4.9000, "train"],
	["Rotterdam", "Holland", 51.9167, 4.5000, "train"],
	["Amsterdam", "Holland", 52.3667, 4.9000, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Amsterdam", "Holland", 52.3667, 4.9000, "plane"],
	["Aruba", "Aruba", 12.5000, -69.9667, "plane"],
	["Willemstad", "Curaçao", 12.1167, -68.9333, "plane"],
	["Klein Curaçao", "Curaçao", 11.9928, -68.6508, "boat"],
	["Willemstad", "Curaçao", 12.1167, -68.9333, "plane"],
	["Amsterdam", "Holland", 52.3667, 4.9000, "plane"],
	["London", "United Kingdom", 51.5072, 0.1275, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "train"],
	["Geneve", "Switzerland", 46.2000, 6.1500, "plane"],
	["Mykonos", "Greece", 37.4500, 25.3500, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Antibes", "France", 43.56241, 7.116667, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Camogli", "Italy", 44.348397, 9.155758, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Forte dei Marmi", "Italy", 43.9638800, 10.1747800, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Warsaw", "Poland", 52.233333, 21.016667, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Sydney", "Australia", -33.8600, 151.2094, "plane"],
	["Melbourne", "Australia", -37.8136, 144.9631, "plane"],
	["Perth", "Australia", -31.9522400, 115.8614000, "plane"],
	["Kuala Lumpur", "Malaysia", 3.1357, 101.6880, "plane"],
	["Macau", "Macau", 22.1667, 113.5500, "boat"],
	["Hong Kong", "Hong Kong", 22.2783, 114.1747, "boat"],
	["Macau", "Macau", 22.1667, 113.5500, "plane"],
	["Kuala Lumpur", "Malaysia", 3.1357, 101.6880, "plane"],
	["Singapore", "Singapore", 1.290270, 103.851959, "plane"],
	["Madrid", "Spain", 40.4000, -3.6833, "plane"],
	["Lanzarote", "Spain", 29.035, -13.633, "boat"],
	["Corralejo", "Spain", 28.7315, -13.8688, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Madrid", "Spain", 40.4000, -3.6833, "plane"],
	["Lucca", "Italy", 43.8500, 10.5000, "train"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Copenhagen", "Denmark", 55.6761, 12.5683, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Berlin", "Germany", 52.5167, 13.3833, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Manchester", "United Kingdom", 53.4667, -2.2333, "plane"],
	["Skopje", "Macedonia", 42.0000, 21.4333, "plane"],
	["Ohrid", "Macedonia", 41.1169, 20.8017, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "train"],
	["Nova Gorica", "Slovenia", 45.9559, 13.6432, "train"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Mexico City", "Mexico", 19.4333, -99.1333, "plane"],
	["Cabo San Lucas", "Mexico", 22.8897, -109.9156, "plane"],
	["Cancun", "Mexico", 21.1606, -86.8475, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Sliema", "Malta", 35.9122, 14.5042, "plane"],
	["Lucca", "Italy", 43.8500, 10.5000, "train"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Sydney", "Australia", -33.8600, 151.2094, "car"],
	["Melbourne", "Australia", -37.8136, 144.9631, "car"],
	["Port Campbell", "Australia", -38.650556, 143.062778, "car"],
	["Byron Bay", "Australia", -28.6431, 153.6150, "car"],
	["Surfers Paradise", "Australia", -28.0000, 153.4167, "car"],
	["Fraser Island", "Australia", -25.2167, 153.1333, "car"],
	["Brisbane", "Australia", -27.4679, 153.0278, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Miami", "United States", 25.7877, -80.2241, "plane"],
	["Las Vegas", "United States", 36.1215, -115.1739, "plane"],
	["Miami", "United States", 25.7877, -80.2241, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["London", "United Kingdom", 51.5072, -0.1275, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Stoke-on-Trent", "United Kingdom", 53.0000, -2.1833, "train"],
	["Manchester", "United Kingdom", 53.4667, -2.2333, "train"],
	["Stoke-on-Trent", "United Kingdom", 53.0000, -2.1833, "train"],
	["Liverpool", "United Kingdom", 53.4000, -3.0000, "train"],
	["Stoke-on-Trent", "United Kingdom", 53.0000, -2.1833, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Lisbon", "Portugal", 38.7138, -9.1394, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "plane"],
	["Los Angeles", "United States", 34.0500, -118.2500, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "bus"],
	["Prague", "Czech Republic", 50.0833, 14.4167, "bus"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Porto Rotondo", "Italy", 41.025556, 9.543333, "plane"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Paris", "France", 48.8567, 2.3508, "car"],
	["Milan", "Italy", 45.4667, 9.1667, "car"],
	["Rome", "Italy", 41.9000, 12.5000, "car"],
	["Milan", "Italy", 45.4667, 9.1667],
	["Napoli", "Italy", 40.833333, 14.25, "car"],
	["Milan", "Italy", 45.4667, 9.1667]
]
