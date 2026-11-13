# Cloud Firestore NoSQL Data Model & Security Rules

## Document Collections (`dm2425` Firestore Instance)

- **`gyms/{gymId}` (`RNF0`, `RFA1`):** Stores multi-tenant white-label settings (`name`, `address`, `phone`, `logoUrl`) and custom UI color palettes.
- **`users/{userId}` (`RFC0`, `RFG0`, `RFA0`):** Stores user role (`ATHLETE`, `MANAGER`, `ADMIN`), contact details, `membershipTier`, `monthlyFee`, `isFeePaidCurrentMonth`, and temporary `inviteToken` expiration metadata.
- **`classes/{classId}` (`RFG1`):** Stores class schedule (`modality`, `instructorName`, `room`, `startTime`, `endTime`, `maxCapacity`, `currentEnrolled`).
- **`bookings/{bookingId}` (`RFC2`, `RFC3`, `RFC4`):** Tracks athlete enrollments, lifecycle state (`INSCRITO`, `CANCELADO`, `FEITO`, `FALTA`), and attendance `qrCodePayload`.