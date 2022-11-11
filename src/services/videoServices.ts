import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://odcdjoozvgddxkereskc.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kY2Rqb296dmdkZHhrZXJlc2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzI3MTQsImV4cCI6MTk4Mzc0ODcxNH0.V0Vp4ePlvTMIBDo22cZi-0K0LQZ_Tdz5caKDYwbL4KM"
export const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}