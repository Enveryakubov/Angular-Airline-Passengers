export interface Passenger {
  id: number;
  name: string;
  checkedIn: boolean;
  checkInDate: number | null;
  baggage: string;
}
