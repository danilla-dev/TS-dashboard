export interface RevenueTrend {
	date: string
	value: number
}

export interface TrafficSource {
	source: string
	value: number
}

export interface DashboardData {
	totalUsers: number
	activeUsers: number
	newSignups: number
	revenue: number
	revenueTrend: RevenueTrend[]
	trafficSources: TrafficSource[]
}
