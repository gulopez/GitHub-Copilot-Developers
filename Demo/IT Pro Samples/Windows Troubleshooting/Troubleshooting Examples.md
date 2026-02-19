# Sample Prompts for troubleshooting scenarios

## Example 1:

```markdown
Help me solve this problem, please 
We have encountered a DNS resolution failure on our primary Windows Server 2019, responsible for internal DNS services. The issue began at approximately 9:00 AM this morning, and we have been unable to resolve internal hostnames since then.

Symptoms:

Internal domain names are not resolving.
External DNS resolution appears to be functioning normally.
DNS Server service is running, but event logs are showing errors related to DNS.
Error Messages:

Event ID 4013: The DNS server is waiting for Active Directory Domain Services (AD DS) to signal that the initial synchronization of the directory has been completed.
Event ID 4004: The DNS server was unable to complete directory service enumeration of zone corp.lan.

```
Response:

when hit the token limit

```markdown
please pick up where youn left off
```

```markdown
Sample follow up prompt:I don't understand repadmin /showrepl
```

```markdown
Sample follow up prompt: I don't understand these suggestions
(Copy and paste the suggestions)
```

```markdown
Sample follow up prompt: Give me the powershell that implement these suggestions
```

Response

## Example 2:

```markdown
New ticket; please help me resolve:
A critical production server running Windows Server 2019 experienced a Blue Screen of Death (BSOD) today at approximately 2:30 PM. The server is part of our core infrastructure and hosts several vital applications.

Symptoms: Server abruptly crashed with a BSOD.

Stop error displayed: SYSTEM THREAD EXCEPTION NOT HANDLED.

What failed: SAS-RAID_Driver_NY8FH_WN_5.1.119.32_A00.EXE

Error Messages:

Full error: STOP 0x0000007E (0xFFFFFFFFC0000005, 0xFFFFF807ABC12345, 0xFFFFF80EABCDEF1234).
```

Response

## Example 3:
```markdown
Final issue for now:
Windows Server Networking

Priority: High

Subject: TCP/IP Connectivity Issue on Windows Server 2019 Hosting Web Applications

Message: We have detected intermittent connectivity issues on one of our Windows Server 2019 instances hosting critical web applications. The server is experiencing dropped TCP connections, leading to service disruptions and slow response times for end-users.

Symptoms:

Intermittent loss of TCP connections to and from the server.
Increased latency and slow response times for web applications hosted on the server.
Network monitoring tools report unusual TCP retransmissions and timeout events.

Error Messages:

Event ID 4227: TCP/IP failed to establish an outgoing connection.
Event ID 4231: A request to allocate an ephemeral port number from the global TCP port space has failed
```

Response:

```markdown
Sample follow up prompt:Create a powershell script that give me this info: (copy from response)  Check IP configuration.....
```

```markdown
Sample follow up prompt: Refactor the script so it shows one screen at a time. Also, minimize the firewall config output
```