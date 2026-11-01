// Synthetic training fixture: all values below are unmistakable placeholders.
const user = {
    id: 1001,
    username: "sample_user",
    firstName: "Alex",
    middleName: null,
    lastName: "Example",
    fullName: "Alex Example",
    age: 30,
    dateOfBirth: "1996-01-01",
    gender: "Unspecified",
    email: "alex@example.com",
    alternateEmail: "alex.work@example.com",
    phone: "000-000-0000",
    isActive: true,
    isEmailVerified: true,
    profilePicture: "https://example.com/images/sample-user.jpg",

    address: {
        houseNumber: "0",
        street: "Example Street",
        landmark: "Example Landmark",
        city: "Sample City",
        state: "Sample State",
        postalCode: "00000",
        country: "Example",
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
    },

    permanentAddress: {
        village: "Example Village",
        district: "Sample District",
        state: "Sample State",
        postalCode: "00000",
        country: "Example",
    },

    languages: ["Example Language"],
    hobbies: ["Example Hobby"],
    skills: [
        "JavaScript",
        "Playwright",
        "API Testing",
        "SQL",
        "Git",
    ],

    education: [
        {
            degree: "Bachelor of Technology",
            specialization: "Computer Science",
            institution: "Example University",
            graduationYear: 2020,
            grade: "Example Grade",
        },
        {
            degree: "Master of Business Administration",
            specialization: "Information Systems",
            institution: "Example Institute",
            graduationYear: 2022,
            grade: "Example Grade",
        },
    ],

    employment: {
        company: "Example Company",
        jobTitle: "Example Role",
        department: "Example Department",
        employeeId: "TEST-EMP-0001",
        employmentType: "Example Type",
        joiningDate: "2020-01-01",
        annualSalary: 0,
        currency: "XXX",
        isRemote: true,
        officeDays: ["Example Day"],
        manager: {
            name: "Casey Example",
            email: "casey@example.com",
        },
    },

    workExperience: [
        {
            company: "Example Company One",
            role: "Example Role One",
            from: 2020,
            to: 2021,
        },
        {
            company: "Example Company Two",
            role: "Example Role Two",
            from: 2021,
            to: 2023,
        },
    ],

    family: {
        maritalStatus: "Unspecified",
        spouse: {
            name: "Taylor Example",
            age: 30,
        },
        children: [
            { name: "Jordan Example", age: 10, occupation: "Example Occupation" },
            { name: "Morgan Example", age: 8, occupation: "Example Occupation" },
        ],
        emergencyContact: {
            name: "Jordan Example",
            relationship: "Example Relationship",
            phone: "000-000-0000",
        },
    },

    socialMedia: {
        linkedIn: "https://example.com/profiles/sample-user",
        github: "https://example.com/profiles/sample-user",
        twitter: "https://example.com/profiles/sample-user",
    },

    preferences: {
        theme: "dark",
        language: "English",
        timezone: "Asia/Kolkata",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        favoriteColors: ["Blue", "Black", "Green"],
    },

    bankAccounts: [
        {
            bankName: "Example Bank",
            accountType: "Example Type",
            accountNumber: "TEST-ACCOUNT",
            isPrimary: true,
        },
    ],

    documents: {
        panCard: "TEST-PAN",
        passportNumber: "TEST-PASSPORT",
        drivingLicense: "TEST-LICENSE",
    },

    loginHistory: [
        { date: "2026-01-02T09:30:00Z", device: "Example Device One", success: true },
        { date: "2026-01-01T17:45:00Z", device: "Example Device Two", success: true },
    ],

    createdAt: "2026-01-01T10:00:00Z",
    updatedAt: "2026-01-02T09:30:00Z",
    lastLoginAt: "2026-01-02T09:30:00Z",

    getIntroduction() {
        return `Hi, I am ${this.fullName}. My role is ${this.employment.jobTitle} in ${this.address.city}.`;
    },

    getFullAddress() {
        return `${this.address.houseNumber}, ${this.address.street}, ${this.address.city}, ${this.address.state} - ${this.address.postalCode}`;
    },
};

console.log(user);
console.log(user.getIntroduction());
console.log(user.getFullAddress());