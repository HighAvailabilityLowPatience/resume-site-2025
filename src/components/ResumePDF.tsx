import { resumeData } from '../data/resumeData';
import {Document,Page,Text,View, StyleSheet,} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },

  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  title: {
    fontSize: 12,
    marginTop: 4,
    color: "#444",
  },

  contact: {
    fontSize: 9,
    marginTop: 2,
  },

  section: {
    marginTop: 14,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },

  jobContainer: {
    marginBottom: 12,
  },

  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  company: {
    fontSize: 10,
    fontWeight: "bold",
  },

  dates: {
    fontSize: 9,
  },

  bullet: {
    marginLeft: 12,
    marginTop: 2,
  },

  projectContainer: {
    marginBottom: 10,
  },

  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  techStack: {
    fontSize: 9,
    marginTop: 2,
    marginBottom: 2,
  },
});

export default function ResumePDF() {
 return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
  <Text style={styles.name}>
    {resumeData.personal.name}
  </Text>

  <Text style={styles.title}>
    {resumeData.personal.title}
  </Text>

  <Text style={styles.contact}>
    {resumeData.contact.email}
  </Text>

  <Text style={styles.contact}>
    {resumeData.contact.linkedin}
  </Text>

  <Text style={styles.contact}>
    {resumeData.contact.github}
  </Text>

  <Text style={styles.contact}>
    {resumeData.personal.location} | {resumeData.personal.clearance}
  </Text>
</View>

        {/* Summary */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Professional Summary
  </Text>

  <Text>
    {resumeData.personal.intro}
  </Text>
</View>

        {/* Skills */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Technical Skills
  </Text>

  <Text>
    Cloud: {resumeData.skills.cloud.join(", ")}
  </Text>

  <Text>
    DevOps: {resumeData.skills.devops.join(", ")}
  </Text>

  <Text>
    Scripting: {resumeData.skills.scripting.join(", ")}
  </Text>

  <Text>
    Systems: {resumeData.skills.systems.join(", ")}
  </Text>
</View>

        {/* Experience */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Professional Experience
  </Text>

  {resumeData.experience.map((job, index) => (
    <View key={index} style={styles.jobContainer}>
      
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>
          {job.title}
        </Text>

        <Text style={styles.dates}>
          {job.startDate} - {job.endDate}
        </Text>
      </View>

      <Text style={styles.company}>
        {job.company} | {job.location}
      </Text>

      {job.bullets.map((bullet, bulletIndex) => (
        <Text key={bulletIndex} style={styles.bullet}>
          • {bullet}
        </Text>
      ))}
    </View>
  ))}
</View>
        {/* Projects */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Technical Projects
  </Text>

  {resumeData.projects.map((project, index) => (
    <View key={index} style={styles.projectContainer}>
      
      <Text style={styles.projectTitle}>
        {project.name}
      </Text>

      <Text>
        {project.description}
      </Text>

      <Text style={styles.techStack}>
        Technologies: {project.tools.join(", ")}
      </Text>

      <Text>
        {project.outcome}
      </Text>
    </View>
  ))}
</View>

        {/* Education */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Education
  </Text>

  {resumeData.education.map((edu, index) => (
    <View key={index}>
      <Text>
        {edu.degree}
      </Text>

      <Text>
        {edu.school}
      </Text>

      <Text>
        Expected Graduation: {edu.year}
      </Text>
    </View>
  ))}
</View>

        {/* Certifications */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Certifications
  </Text>

  {resumeData.certifications.map((cert, index) => (
    <Text key={index}>
      • {cert.name} — {cert.issuer} ({cert.year})
    </Text>
  ))}
</View>

      </Page>
    </Document>
  );
}